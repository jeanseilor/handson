import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Usuario } from './models/usuario.model';


const API_URL = "http://localhost:8765/api/handson/";

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }


  public post(usuario: Usuario){    
    return this.http.post(API_URL+'/usuarios', usuario).map(response => {
      return response;
    }).catch(this.handleError);
  }

  public get():Observable<Usuario[]>{
    return this.http.get(API_URL+'/usuarios').map(res =>{
     return res.json();
    }).catch(this.handleError);
  }

}
