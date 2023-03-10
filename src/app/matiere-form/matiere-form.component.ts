import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from 'src/models/Matiere';
import { Niveau } from 'src/models/Niveau';
import { Utilisateur } from 'src/models/Utilisateur';
import Swal from 'sweetalert2';
import { MatiereService } from '../services/matiere.service';
import { NiveauService } from '../services/niveau.service';
import { UtilisateurService } from '../services/utilisateur.service';


@Component({
  selector: 'app-matiere-form',
  templateUrl: './matiere-form.component.html',
  styleUrls: ['./matiere-form.component.css']
})
export class MatiereFormComponent implements OnInit {
  TabNiveau:Niveau[]=[];
  form :any;
  item1:any;
  currentItemId :string="";
  selectedValue='';
  constructor(private router: Router,private US : NiveauService, private CS :MatiereService, private activatedRoute :ActivatedRoute) {
      this.TabNiveau = this.US.tab 
    }

  ngOnInit() {
    this.currentItemId=this.activatedRoute.snapshot.params['id'];
    if(!! this.currentItemId )
      this.CS.getMatiereById(this.currentItemId).then((item)=>{
        this.item1=item;
        this.initForm1(item)
      })
      else {this.initForm();}
  }

  initForm1(item:Matiere):void
  {
    this.form=new FormGroup({
      nom:new FormControl(item.nom,[Validators.required] ),
      // coefficient:new FormControl(item.coefficient,[Validators.required]),
      niveau:new FormControl(item.niveau,[Validators.required]),
    })
  }

  initForm():void
  {
    this.form=new FormGroup({
      nom:new FormControl(null,[Validators.required] ),
      // coefficient:new FormControl(null,[Validators.required]),
       niveau:new FormControl(null,[Validators.required]),
    })
   }
  
  
  onsub():void{
    console.log(this.form.value);
    //const memberTosave=this.form.value;//// ancien element+form(update)
    const objectToSubmit : Matiere= {...this.item1,...this.form.value};
    this.CS.saveMatiere(objectToSubmit).then (()=>
    {this.router.navigate(['./matieres']) } )
    
  }

}
