export type Album = {
    userId: number;
    id: number;
    title: string
}

export type AlbumsApiResponse<T> = {
    data: T;
    status: number;
    message: string
}