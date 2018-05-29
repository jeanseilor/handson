import { Usuario } from './../models/usuario.model';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }
  usuarios:Usuario[];


  ngOnInit() {
    this.getAll();
    console.log(this.usuarios);
  }

  // nao consegui retorna o usuario tipado
  getAll(){
    let usuarioLista:Usuario[];
    this.usuarioService.get().subscribe(us=>{
      this.usuarios= us;
    });
  }


}
