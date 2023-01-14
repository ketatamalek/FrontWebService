import { Injectable } from '@angular/core';
import { DemandeTirage } from 'src/models/DemandeTirage';
import { GLOBAL } from '../app-config';
@Injectable({
  providedIn: 'root'
})
export class DemandeTirageService {

  tab :DemandeTirage[]=GLOBAL._db.demandes;
  constructor() { }
  saveDemande (memberTosave : DemandeTirage) : Promise <void>
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
  getNbDemandes():Promise<number>
  {
    return new Promise(resolve => resolve(this.tab.length)) ;
  }
  getDemandeById (id: string):  Promise <DemandeTirage>
  {
    //this.httpClient.get<Member>('lien').toPromise();
    return new Promise(resolve =>resolve(
    this.tab.filter(item=>item.id===id) [0] ?? null
    ))
  }
  deleteDemandeByID(id:string): Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise();
    this.tab=this.tab.filter(item=>item.id!==id)
    return new Promise (resolve=>resolve());
  }
  getAllDemandes():Promise<DemandeTirage[]>{
    //return this.httpClient.get<Member[]>('link').toPromise();
    return new Promise (resolve=>resolve(this.tab));
  }
}
