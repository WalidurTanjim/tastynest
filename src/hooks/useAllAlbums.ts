import { useQuery } from "@tanstack/react-query";
import type { Album, AlbumsApiResponse } from "../types/albumsType";
import axiosPublic from "./axiosPublic";

const useAllAlbums = () => {
    const { data: albums, isPending, isError, error, refetch } = useQuery<AlbumsApiResponse<Album[]>>({
        queryKey: ['albums'],
        queryFn: async(): Promise<AlbumsApiResponse<Album[]>> => {
            try{
                const res = await axiosPublic.get('/albums');
                if(!res){
                    throw new Error(`HTTP error! Status code ${res}`)
                }
                const data = await res?.data;
                // console.log("Albums data from hook:", data);
                return {
                    data,
                    status: res?.status,
                    message: "Success"
                }
            }catch(err){
                return {
                    data: [],
                    status: 500,
                    message: err instanceof Error ? err?.message : "An Error Occured"
                }
            }
        }
    })

    return { albums: albums?.data || [], status: albums?.status, message: albums?.message, isPending, isError, error, refetch };
};

export default useAllAlbums;