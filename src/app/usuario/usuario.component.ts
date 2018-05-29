import { UsuarioService } from './../usuario.service';

import { Usuario } from './../models/usuario.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario();
  saveSuccess: boolean;

  constructor(private usuarioService:UsuarioService) { }
  
  ngOnInit() {
    this.usuario.nome="";
  }

  // salva os usuarios
  onSubmit():void{
    this.usuarioService.post(this.usuario).subscribe(res=>{
      if(res.status == 201){
        this.saveSuccess = true;
      }
    });
  }

}
