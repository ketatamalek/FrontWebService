import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Client } from 'src/models/Client';
import { Compte } from 'src/models/Compte';
import { GLOBAL } from '../app-config';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  baseURL = "http://localhost:8080/comptes/all-json";
  clientCount: number = 0;
  client: Client | undefined;
  constructor(private httpClient: HttpClient) { }
  saveCompte (client : string, solde : string) : Observable <boolean>
  {
    return this.httpClient.post<boolean>('http://localhost:8080/comptes/save?cin='+client+'&&solde='+solde,{});
  }
  updateCompte (rib : string,client : string, solde : string) : Observable <boolean>
  {
    return this.httpClient.post<boolean>('http://localhost:8080/comptes/update-json?rib='+rib+'&&cin='+client+'&&solde='+solde,{});
  }
  getNbComptes():Observable<number>
  {
    return this.httpClient.get<number>('http://localhost:8080/comptes/nbComptes');
  }
  getCompteByRib (id: string):  Observable <Compte>
  {
    return this.httpClient.get<Compte>('http://localhost:8080/comptes/getByRib?rib='+id);
  }
  deleteCompteByRib(id:string): Observable<void>{
    return this.httpClient.delete<void>('http://localhost:8080/comptes/delete-ajax?rib='+id);
  }
  getAllComptes():Observable<Compte[]>{
    return this.httpClient.get<Compte[]>(this.baseURL);
  }
  getAllClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>("http://localhost:8080/clients/all-json");
  }
}
