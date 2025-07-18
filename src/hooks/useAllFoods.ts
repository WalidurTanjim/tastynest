import { useQuery } from "@tanstack/react-query";
import type { Food, FoodsApiResponse } from "../types/foodsType";
// import axiosPublic from "./axiosPublic";
import axios from "axios";

const useAllFoods = () => {
    const { data: foods, isPending, isError, error, refetch } = useQuery<FoodsApiResponse<Food[]>>({
        queryKey: ['foods'],
        queryFn: async(): Promise<FoodsApiResponse<Food[]>> => {
            try{
                const res = await axios.get('foods.json');
                // console.log('Response from useAllFoods.ts hook:', res);
                if(!res){
                    throw new Error(`HTTP error! Status code ${res}`)
                }
                const data = await res?.data;
                return {
                    data,
                    status: res?.status,
                    message: "Success"
                }
            }catch(err){
                return {
                    data: [],
                    status: 500,
                    message: err instanceof Error ? err?.message : 'An Error Occured'
                }
            }
        }
    })

    return {
        foods: foods?.data || [],
        status: foods?.status,
        message: foods?.message,
        isPending, isError, error, refetch
    }
};

export default useAllFoods;