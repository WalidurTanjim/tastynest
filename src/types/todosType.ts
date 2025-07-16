export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type TodosApiResponse<T> = {
    data: T;
    status: number;
    message: string;
}