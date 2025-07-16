import type { Todo, TodosApiResponse } from "../types/todosType";
import axiosPublic from "./axiosPublic";

const fetchTodo = async(): Promise<TodosApiResponse<Todo[]>> => {
    try{
        const res = await axiosPublic('/todos');
        if(!res){
            throw new Error (`HTTP error! Bad auth ${res}`)
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
            message: err instanceof Error ? err?.message : "An Error Occured"
        }
    }
}

export default fetchTodo;