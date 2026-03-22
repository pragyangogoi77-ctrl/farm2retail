import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Farm {
    id: bigint;
    name: string;
    description: string;
    imageUrl: string;
    location: string;
}
export interface Product {
    id: bigint;
    inStock: boolean;
    name: string;
    unit: string;
    description: string;
    imageUrl: string;
    category: string;
    price: number;
    farmId: bigint;
}
export interface backendInterface {
    getAllFarms(): Promise<Array<Farm>>;
    getAllProducts(): Promise<Array<Product>>;
    getFarmById(id: bigint): Promise<Farm>;
    getProductById(id: bigint): Promise<Product>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    getProductsByFarmId(farmId: bigint): Promise<Array<Product>>;
    searchProductsByName(searchText: string): Promise<Array<Product>>;
}
