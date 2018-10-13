import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { DetallesComponent } from './detalles/detalles.component';


const routes: Routes = [
  { path: 'detalles/:x', component: DetallesComponent },
  { path: 'cuerpo', component: CuerpoComponent },
  { path: '',component: CuerpoComponent,  pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }

  
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuerpoComponent,
    DetallesComponent,
    
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
