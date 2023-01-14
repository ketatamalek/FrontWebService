import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from 'src/models/Groupe';
import { Utilisateur } from 'src/models/Utilisateur';
import { GroupeService } from '../services/groupe.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-groupe-form',
  templateUrl: './groupe-form.component.html',
  styleUrls: ['./groupe-form.component.css']
})
export class GroupeFormComponent implements OnInit {
   
    form :any;
    currentItemId :string="";
    item1:any;
    constructor(private MS: GroupeService,private router: Router , private activatedRoute :ActivatedRoute) { }
  
    ngOnInit(): void
    {
     this.currentItemId=this.activatedRoute.snapshot.params['id'];
     if(!! this.currentItemId )
     this.MS.getGroupeById(this.currentItemId).then((item)=>{
       this.item1=item;
       this.initForm1(item)
     })
     else {this.initForm();}
    }
    initForm1(item:Groupe):void
    {
      this.form=new FormGroup({
        nom:new FormControl(item.nom,[Validators.required] ),
        nbEtudiants:new FormControl(item.nbEtudiants,[Validators.required]),
      })
    }
  
    initForm():void
    {
      this.form=new FormGroup({
        nom:new FormControl(null,[Validators.required] ),
        nbEtudiants:new FormControl(null,[Validators.required]),

      })
    }
  
      onsub():void{
        console.log(this.form.value);
        //const memberTosave=this.form.value;//// ancien element+form(update)
        const objectToSubmit : Groupe= {...this.item1,...this.form.value};
        this.MS.saveGroupe(objectToSubmit).then (()=>
        {this.router.navigate(['./groupes']) } )
  
      }
  
  

}
