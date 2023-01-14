import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from 'src/models/Groupe';
import { Matiere } from 'src/models/Matiere';
import { MatiereGroupe } from 'src/models/MatiereGroupe';
import { Niveau } from 'src/models/Niveau';
import { Utilisateur } from 'src/models/Utilisateur';
import Swal from 'sweetalert2';
import { GroupeMatiereService } from '../services/groupe-matiere.service';
import { GroupeService } from '../services/groupe.service';
import { MatiereService } from '../services/matiere.service';
import { NiveauService } from '../services/niveau.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-affectation-form',
  templateUrl: './affectation-form.component.html',
  styleUrls: ['./affectation-form.component.css']
})
export class AffectationFormComponent implements OnInit {

  TabMatiere:Matiere[]=[];
  TabGroupe:Groupe[]=[];
  TabEnseignant:Utilisateur[]=[];
  form :any;
  item1:any;
  currentItemId :string="";
  selectedValueM='';
  selectedValueE='';
  selectedValueG='';
  constructor(private router: Router,private GS: GroupeService,private ES: UtilisateurService,private US : MatiereService, private CS :GroupeMatiereService, private activatedRoute :ActivatedRoute) {
      this.TabMatiere = this.US.tab ;
      this.TabEnseignant = this.ES.tab;
      this.TabGroupe = this.GS.tab;
    }

  ngOnInit() {
    this.currentItemId=this.activatedRoute.snapshot.params['id'];
    if(!! this.currentItemId )
      this.CS.getAffectationById(this.currentItemId).then((item)=>{
        this.item1=item;
        this.initForm1(item)
      })
      else {this.initForm();}
  }

  initForm1(item:MatiereGroupe):void
  {
    this.form=new FormGroup({
      matiere:new FormControl(item.matiere,[Validators.required] ),
      groupe:new FormControl(item.groupe,[Validators.required] ),
      enseignant:new FormControl(item.enseignant,[Validators.required] ),
    })
  }

  initForm():void
  {
    this.form=new FormGroup({
      matiere:new FormControl(null,[Validators.required] ),
      groupe:new FormControl(null,[Validators.required] ),
      enseignant:new FormControl(null,[Validators.required] ),
    })
   }
  
  
  onsub():void{
    console.log(this.form.value);
    //const memberTosave=this.form.value;//// ancien element+form(update)
    const objectToSubmit : MatiereGroupe= {...this.item1,...this.form.value};
    this.CS.saveAffectation(objectToSubmit).then (()=>
    {this.router.navigate(['./affectations']) } )
    
  }

}
