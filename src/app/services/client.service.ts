import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Client } from 'src/models/Client';
import { GLOBAL } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseURL = "http://localhost:8080/clients/all-json";
  clientCount: number = 0;
  constructor(private httpClient: HttpClient) { }
  saveClient (ClientTosave : Client) : Observable <void>
  {
    // inserer l'lement dans la constante ClientToSave dans tab
    return this.httpClient.post<void> ('http://localhost:8080/clients/saveOrUpdate',ClientTosave);
  }
  
  getClientByCin (id: string):  Observable <Client>
  {
    return this.httpClient.get<Client>('http://localhost:8080/clients/getByCin/'+id);
  }
  deleteClientByCIN(id:string): Observable<boolean>{
    return this.httpClient.delete<boolean>('http://localhost:8080/clients/delete-ajax?cin='+id);
  }
  
  
  getAllClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.baseURL);
  }
  getNbClients() : Observable<number>{
    return this.httpClient.get<number>('http://localhost:8080/clients/nbClients');
  }
}
