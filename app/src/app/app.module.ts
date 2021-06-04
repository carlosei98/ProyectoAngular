import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { ConsultaMaximosComponent } from './components/consulta_maximos.component';
import { CreacionMaximosComponent } from './components/creacion_maximos.component';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './components/home.component';
import { MaximoComponent } from './components/maximo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ConsultaMaximosComponent,
    MaximoComponent,
    CreacionMaximosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
