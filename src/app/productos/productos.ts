import { tallaCreacionDTO } from "../talla/talla";

export interface productoCreacionDTO{
    nombre:string;
    precio:string;
    foto: string;
    tallas:tallaCreacionDTO[];
}

export interface productoDTO {
    id: number;
   nombre:string;
    precio:string;
    foto:string;
}
export interface productotallaDTO{
    id: number;
    nombre:string;
    precio:string;
    foto: string;
    talla: any;
}
