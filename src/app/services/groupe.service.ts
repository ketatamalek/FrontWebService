import { Injectable } from '@angular/core';
import { Groupe } from 'src/models/Groupe';
import { Utilisateur } from 'src/models/Utilisateur';
import { GLOBAL } from '../app-config';
@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  tab :Groupe[]=GLOBAL._db.groupes;
  constructor() { }
  saveGroupe (memberTosave : Groupe) : Promise <void>
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
  getNbGroupes():Promise<number>
  {
    return new Promise(resolve => resolve(this.tab.length)) ;
  }
  getGroupeById (id: string):  Promise <Groupe>
  {
    //this.httpClient.get<Member>('lien').toPromise();
    return new Promise(resolve =>resolve(
    this.tab.filter(item=>item.id===id) [0] ?? null
    ))
  }
  deleteGroupeByID(id:string): Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise();
    this.tab=this.tab.filter(item=>item.id!==id)
    return new Promise (resolve=>resolve());
  }
  getAllGroupes():Promise<Groupe[]>{
    //return this.httpClient.get<Member[]>('link').toPromise();
    return new Promise (resolve=>resolve(this.tab));
  }
}
