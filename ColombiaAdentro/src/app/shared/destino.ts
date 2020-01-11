import {Ruta} from './ruta';
export class Destino{
    _id: number;
    nombre: string;
    imagen: string;
    precio: number;
    ciudad: string;
    calificacion: string;
    historia: string;
    direcciones:string;
    rutas: Ruta[];

    constructor(){
      this.rutas = [];
    }
}
