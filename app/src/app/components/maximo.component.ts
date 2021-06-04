import {Component, Input} from '@angular/core';
import { Maximo } from '../models/maximo';




@Component({
    selector:'maximo',
    templateUrl:'../views/maximo.html'
})
export class MaximoComponent{
    public maximo!:Maximo;
        

    
    
    @Input() resultado!:string;
    @Input() readOnly!:boolean;

    constructor(){
       
      
    }

    ngOnInit(){   console.log(this.readOnly+" el read only");
    if(this.readOnly==true){
  
        this.maximo={
            alta_coordinada:"alta_coordinada",
            afecta_vip:'afecta_vip',
            afecta_replica:'true',
            ambito:'ambito',
            cambios_cmdb:'true',
            cambios_doc:'true',
            canal:'canal',
            categoria:'categoria',
            ci:'ci',
            cinum:'cinum',
            cliente:'cliente',
            //FALLO ORTOGRAFICO DE JSON --- COMPOMENTES
            compomentes_criticos:'true',
            creador:'creador',
            desc_impacto:'desc_impacto',
            description:'description',
            description_longdescription:'description_longdescription',
            duracion_estimada:'duracion_estimada',
            duracion_ma:'duracion_ma',
            fecha_creacion:'fecha_creacion',
            fecha_limite_entrega:'fecha_limite_entrega',
            fecha_reportado:'fecha_reportado',
            global:'global',
            grupo_creador:'grupo_creador',
            impacto:'impacto',
            impacto_negocio:'impacto_negocio',
            incumple_ventana:'true',
            indisponibilidad:'indisponibilidad',
            leadtime:'leadtime',
            llamar_tecnico:'false',
            modificacion_en_curso:'true',
            motivo_cambio:'motivo_cambio',
            ownergroup:'ownergroup',
            propietario:'propietario',
            req_batch:'req_batch',
            req_ipl:'req_ipl',
            req_mitiga:'true',
            req_pi:'req_pi',
            req_rollout:'true',
            rol_operacion:'rol_operacion',
            schedfinish:'schedfinish',
            schedstart:'schedstart',
            servicioti:'servicioti',
            sistema:'sistema',
            sistema_nombre:'sistema_nombre',
            status:'status',
            telefono_tecnico:'telefono_tecnico',
            tipo_cambio:'tipo_cambio',
            tipo_implementacion:'tipo_implementacion',
            validacion_verificacion:'true',
            wonum:'wonum',
            
    
        }
    } else{
      
        this.maximo={
            alta_coordinada:"",
            afecta_vip:'',
            afecta_replica:'',
            ambito:'',
            cambios_cmdb:'',
            cambios_doc:'',
            canal:'',
            categoria:'',
            ci:'',
            cinum:'',
            cliente:'',
            //FALLO ORTOGRAFICO DE JSON --- COMPOMENTES
            compomentes_criticos:'',
            creador:'',
            desc_impacto:'',
            description:'',
            description_longdescription:'',
            duracion_estimada:'',
            duracion_ma:'',
            fecha_creacion:'',
            fecha_limite_entrega:'',
            fecha_reportado:'',
            global:'',
            grupo_creador:'',
            impacto:'',
            impacto_negocio:'',
            incumple_ventana:'',
            indisponibilidad:'',
            leadtime:'',
            llamar_tecnico:'',
            modificacion_en_curso:'',
            motivo_cambio:'',
            ownergroup:'',
            propietario:'',
            req_batch:'',
            req_ipl:'',
            req_mitiga:'',
            req_pi:'',
            req_rollout:'',
            rol_operacion:'',
            schedfinish:'',
            schedstart:'',
            servicioti:'',
            sistema:'',
            sistema_nombre:'',
            status:'',
            telefono_tecnico:'',
            tipo_cambio:'',
            tipo_implementacion:'',
            validacion_verificacion:'',
            wonum:'',
            
    
        }
    }

   
  
  

    
        console.log("Se ha cargado componente: maximo");
    }


    enviarMaximo(){
        console.log(this.maximo);
    }
}