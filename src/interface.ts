export interface AppName {
    name: string;
}

export interface Student {
    name: string;
    surname: string;
    age?: number;
    level?: Level;
}

export interface Address {
    houseNo: number;
    street: string;
    town: string;
}

export enum Level {
    Undergraduate = "Undergraduate",
    Postgraduate = "Postgraduate"
}