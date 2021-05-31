import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes
import {HomeComponent} from './components/home.component';
import {ConsultaMaximosComponent} from './components/consulta_maximos.component';
import { ErrorComponent } from './components/error.component';


const appRoutes: Routes =[
{path: '', component:HomeComponent},

{path: 'home', component:HomeComponent},

{path: 'consulta_maximos', component:ConsultaMaximosComponent},


{path: '**', component:ErrorComponent},
]

export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);