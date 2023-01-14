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
  selector: 'app-niveau-form',
  templateUrl: './niveau-form.component.html',
  styleUrls: ['./niveau-form.component.css']
})
export class NiveauFormComponent implements OnInit {

  form :any;
  item1:any;
  currentItemId :string="";
  constructor(private router: Router, private CS :NiveauService, private activatedRoute :ActivatedRoute) {
    }

  ngOnInit() {
    this.currentItemId=this.activatedRoute.snapshot.params['id'];
    if(!! this.currentItemId )
      this.CS.getNiveauById(this.currentItemId).then((item)=>{
        this.item1=item;
        this.initForm1(item)
      })
      else {this.initForm();}
  }

  initForm1(item:Niveau):void
  {
    this.form=new FormGroup({
      niveau:new FormControl(item.niveau,[Validators.required] ),
    })
  }

  initForm():void
  {
    this.form=new FormGroup({
      niveau:new FormControl(null,[Validators.required] ),
    })
   }
  
  
  onsub():void{
    console.log(this.form.value);
    //const memberTosave=this.form.value;//// ancien element+form(update)
    const objectToSubmit : Niveau= {...this.item1,...this.form.value};
    this.CS.saveNiveau(objectToSubmit).then (()=>
    {this.router.navigate(['./niveaux']) } )
    
  }

}
