export type Food = {
    name: string;
    category: string;
    description: string;
    price: number;
    thumb: string;
    quantity: number;
    author: {
        authorName: string;
        authorEmail: string;
        authorImage: string;
    }
}

export type FoodsApiResponse<T> = {
    data: T;
    status: number;
    message: string;
}