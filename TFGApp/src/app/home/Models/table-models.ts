export interface TableModels {
    cantidad:number;
    fecha:string;
    tipo:string;
    idUser?:string;
}
export interface BillsHeaders{
    cantidad:string;
    fecha:string;
    tipo:string;
}
export interface TypeOfBill{
    type:string;
}

export interface Saves{
    date:string,
    type:string,
    value:number,
    idUser?:string
}