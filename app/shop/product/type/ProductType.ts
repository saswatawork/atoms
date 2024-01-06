export interface Rating {
    count: number;
    rate: number;
}

export interface ProductType {
    category: string;
    image: string,
    description: string;
    price: number;
    rating: Rating;
    title: string
}