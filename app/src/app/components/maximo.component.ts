import {Component, Input} from '@angular/core';
import { Maximo } from '../models/maximo';




@Component({
    selector:'maximo',
    templateUrl:'../views/maximo.html'
})
export class MaximoComponent{
    public maximo:Maximo={
        alta_coordinada:"alta_coordinada",
        afecta_vip:'afecta_vip',
        afecta_replica:'afecta_replica',
        ambito:'ambito',
        cambios_cmdb:'cambios_cmdb',
        cambios_doc:'cambios_doc',
        canal:'canal',
        categoria:'categoria',
        ci:'ci',
        cinum:'cinum',
        cliente:'cliente',
        compomentes_criticos:'compomentes_criticos',
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
        incumple_ventana:'incumple_ventana',
        indisponibilidad:'indisponibilidad',
        leadtime:'leadtime',
        llamar_tecnico:'llamar_tecnico',
        modificacion_en_curso:'modificacion_en_curso',
        motivo_cambio:'motivo_cambio',
        ownergroup:'ownergroup',
        propietario:'propietario',
        req_batch:'req_batch',
        req_ipl:'req_ipl',
        req_mitiga:'req_mitiga',
        req_pi:'req_pi',
        req_rollout:'req_rollout',
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
        validacion_verificacion:'validacion_verificacion',
        wonum:'wonum',
        

    }
    
    @Input() resultado!:string;

    constructor(){
      
        console.log("wonum vale"+this.maximo.wonum);
     
        
    }

    ngOnInit(){
        console.log("Se ha cargado componente: maximo");
    }
}