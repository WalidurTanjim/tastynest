import { useQuery } from "@tanstack/react-query";
import type { ApiResponse, User } from "../types/usersType";
import axiosPublic from "./axiosPublic";

const useAllUsers = () => {
    const { data: users, isPending, isError, error, refetch } = useQuery<ApiResponse<User[]>>({
        queryKey: ['users'],
        queryFn: async(): Promise<ApiResponse<User[]>> => {
            try{
                const res = await axiosPublic.get('/users');
                // console.log("Response from try block of useAllUsers hook:", res);
                if(!res){
                    console.log("Error found");
                }
                const data = await res?.data;
                // console.log("Data from try block of useAllUsers hook:", data);
                return {
                    data,
                    status: res?.status,
                    message: "Success"
                }
            }catch(err){
                // console.error("Error from catch block of useAllUsers hook:", err);
                throw err instanceof Error ? err : new Error('An error occurred while fetching users.');
            }
        }
    })

    // console.log("Return value of users from useAllUsers:", users);
    return { users: users?.data || [], status: users?.status, message: users?.message, isPending, isError, error, refetch };
}

export default useAllUsers;