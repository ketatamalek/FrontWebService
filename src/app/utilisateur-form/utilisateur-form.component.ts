import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/models/Utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.css']
})
export class UtilisateurFormComponent implements OnInit {
   
  form :any;
  currentItemId :string="";
  item1:any;
  public showPassword: boolean = false;
  constructor(private MS: UtilisateurService,private router: Router , private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void
  {
   this.currentItemId=this.activatedRoute.snapshot.params['id'];
   if(!! this.currentItemId )
   this.MS.getUserById(this.currentItemId).then((item)=>{
     this.item1=item;
     this.initForm1(item)
   })
   else {this.initForm();}
  }
  initForm1(item:Utilisateur):void
  {
    this.form=new FormGroup({
      username:new FormControl(item.username,[Validators.required] ),
      email:new FormControl(item.email,[Validators.required]),
      password:new FormControl(item.password,[Validators.required, Validators.min(3)] ),
      role:new FormControl(item.role,[Validators.required]),
    })
  }

  initForm():void
  {
    this.form=new FormGroup({
      username:new FormControl(null,[Validators.required] ),
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required, Validators.min(3)] ),
      role:new FormControl(null,[Validators.required]),
    })
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

    onsub():void{
      console.log(this.form.value);
      //const memberTosave=this.form.value;//// ancien element+form(update)
      const objectToSubmit : Utilisateur= {...this.item1,...this.form.value};
      this.MS.saveUser(objectToSubmit).then (()=>
      {this.router.navigate(['./utilisateurs']) } )

    }

}
