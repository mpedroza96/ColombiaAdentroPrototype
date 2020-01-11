import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {environment} from '../environments/environment';

const apiUrl = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  createEmail(email):Observable<any>{
    return this.http.post<any>(apiUrl + 'emails/', email);
  }
}
