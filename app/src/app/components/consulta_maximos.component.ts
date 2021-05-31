import {Component} from '@angular/core';


@Component({
    selector:'consulta_maximos',
    templateUrl:'../views/consulta_maximos.html'
})
export class ConsultaMaximosComponent{
    public titulo:string;
    public code !: string;
    

    constructor(){
        this.titulo="Consulta de máximos";
    }

    ngOnInit(){
        console.log("Se ha cargado componente: consulta_maximos");
    }

    enviarCodigo(){
        console.log(this.code);
    }
}