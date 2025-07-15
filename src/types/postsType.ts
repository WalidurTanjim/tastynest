export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type PostsApiResponse<T> = {
    data: T;
    status: number;
    message: string;
}