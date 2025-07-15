export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
}

export type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
}