import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/models/Client';
import Swal from 'sweetalert2';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  form :any;
  currentItemId :string="";
  item1:any;
  constructor(private MS: ClientService,private router: Router , private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void
  {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
   this.currentItemId=this.activatedRoute.snapshot.params['cin'];
   console.log(this.currentItemId);
   if(!! this.currentItemId )
   this.MS.getClientByCin(this.currentItemId).subscribe((item)=>{
     this.item1=item;
     this.initForm1(item)
   })
   else {this.initForm();}
  }
  initForm1(item:Client):void
  {
    this.form=new FormGroup({
      cin:new FormControl(item.cin,[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('^-?[0-9]*$')] ),
      nom:new FormControl(item.nom,[Validators.required]),
      prenom:new FormControl(item.prenom,[Validators.required]),
      adresse:new FormControl(item.adresse,[Validators.required] ),
    })
  }

  initForm():void
  {
    this.form=new FormGroup({
      cin:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('^-?[0-9]*$')] ),
      nom:new FormControl(null,[Validators.required]),
      prenom:new FormControl(null,[Validators.required]),
      adresse:new FormControl(null,[Validators.required] ),
    })
  }
    onsub():void{
      console.log(this.form.value);
      //const memberTosave=this.form.value;//// ancien element+form(update)
      const objectToSubmit : Client= {...this.item1,...this.form.value};
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
      this.MS.saveClient(objectToSubmit).subscribe (()=>
      {this.router.navigate(['./clients']) } )

    }

}
