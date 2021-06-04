import {Component} from '@angular/core';
import { Maximo } from '../models/maximo';


@Component({
    selector:'creacion_maximos',
    templateUrl:'../views/creacion_maximos.html'
})
export class CreacionMaximosComponent{
    public titulo:string;
    public maximo!: Maximo;

    

    constructor(){
        this.titulo="Creacion de máximos";
    }

    ngOnInit(){
        console.log("Se ha cargado componente: creacion_maximos");
    }

    enviarCodigo(){

    }
}