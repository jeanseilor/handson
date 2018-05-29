import { UsuarioService } from './usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioListaComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule,HttpModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
