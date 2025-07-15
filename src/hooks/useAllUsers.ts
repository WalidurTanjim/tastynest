import type { ApiResponse, User } from "../types/usersType";
import axiosPublic from "./axiosPublic";

export const fetchUser = async(): Promise<ApiResponse<User[]>> => {
    try{
       const res = await axiosPublic.get('/users');
       if(!res){
            throw new Error (`HTTP error! status ${res}`)
       }

       const data = await res.data;
       return {
            data,
            status: res.status,
            message: "Success"
       }

    }catch(err){
        return {
           data: [],
           status: 500,
           message: err instanceof Error ? err.message : 'An Error Occured'
        }
    }
}