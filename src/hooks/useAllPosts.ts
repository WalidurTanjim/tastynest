import { useQuery } from "@tanstack/react-query";
import type { Post, PostsApiResponse } from "../types/postsType";
import axiosPublic from "./axiosPublic";

const useAllPosts = () => {
    const { data: posts, isPending, isError, error, refetch } = useQuery<PostsApiResponse<Post[]>>({
        queryKey: ['posts'],
        queryFn: async(): Promise<PostsApiResponse<Post[]>> => {
            try{
                const res = await axiosPublic.get('/posts');
                // console.log("Response from try block of useAllPosts hook:", res);
                const data = await res?.data;
                // console.log("Data from try block of useAllPosts hook:", data);
                return {
                    data,
                    status: res?.status,
                    message: "Success"
                }
            }catch(err){
                // console.error("Error from catch block of useAllPosts hook:", err);
                throw err instanceof Error ? err : new Error('An error occurred while fetching posts.')
            }
        }
    })

    // console.log("Return value of posts:", posts);
    return {
        posts: posts?.data || [],
        status: posts?.status,
        message: posts?.message,
        isPending, isError, error, refetch
    }
}

export default useAllPosts;