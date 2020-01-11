import { Injectable } from '@angular/core';
import {Destino} from '../shared/destino';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const apiUrl = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  constructor(private http: HttpClient) { }

  getDestinos():Observable<Destino[]>{
    return this.http.get<Destino[]>(apiUrl + 'destinos/');
  }

  getDestino(id):Observable<Destino>{
    return this.http.get<Destino>(apiUrl + 'destinos/'+ id + '/');
  }
}
