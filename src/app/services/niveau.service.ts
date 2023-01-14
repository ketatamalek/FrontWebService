import { Injectable } from '@angular/core';
import { Groupe } from 'src/models/Groupe';
import { Niveau } from 'src/models/Niveau';
import { GLOBAL } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  tab :Niveau[]=GLOBAL._db.niveaux;
  constructor() { }
  saveNiveau (memberTosave : Niveau) : Promise <void>
  {
    // inserer l'lement dans la constante MemberToSave dans tab
    //this.httpClient.post<Member> ('lien',memberTosave).toPromise();
    const Member2=
    {// les elements dans MemberToSave + id+ createdDate
      ...memberTosave, //extraction dans champs(cin,name,cv,type)
      id: memberTosave.id?? (Math.ceil(Math.random()*10000)).toString(),
    }
    //insertion dans le tableau tab
    this.tab=[Member2, ...this.tab.filter(item=> item.id!==Member2.id)]
    return new Promise(resolve => resolve()) ;
  }
  getNbNiveaus():Promise<number>
  {
    return new Promise(resolve => resolve(this.tab.length)) ;
  }
  getNiveauById (id: string):  Promise <Niveau>
  {
    //this.httpClient.get<Member>('lien').toPromise();
    return new Promise(resolve =>resolve(
    this.tab.filter(item=>item.id===id) [0] ?? null
    ))
  }
  deleteNiveauByID(id:string): Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise();
    this.tab=this.tab.filter(item=>item.id!==id)
    return new Promise (resolve=>resolve());
  }
  getAllNiveaux():Promise<Niveau[]>{
    //return this.httpClient.get<Member[]>('link').toPromise();
    return new Promise (resolve=>resolve(this.tab));
  }
}
