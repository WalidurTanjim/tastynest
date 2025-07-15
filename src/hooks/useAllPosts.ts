import type { Post, PostsApiResponse } from "../types/postsType";
import axiosPublic from "./axiosPublic";

const fetchPosts = async(): Promise<PostsApiResponse<Post[]>> => {
    try{
        const res = await axiosPublic.get('/posts');
        if(!res){
            throw new Error (`HTTP error! Status code ${res}`)
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
            message: err instanceof Error ? err?.message : "An Error Occured"
        }
    }
}

export default fetchPosts;