import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from 'src/models/Compte';
import Swal from 'sweetalert2';
import { CompteService } from '../services/compte.service';
export interface User {
  name: string;
}


@Component({
  selector: 'app-compte-form',
  templateUrl: './compte-form.component.html',
  styleUrls: ['./compte-form.component.css']
})
export class CompteFormComponent implements OnInit {
  options:any;
  filteredOptions : any;
  form :any;
  item1:any;
  currentItemId :string="";
  constructor(private router: Router, private CS :CompteService, private activatedRoute :ActivatedRoute) { }

  ngOnInit() {
    this.currentItemId=this.activatedRoute.snapshot.params['rib'];
    if(!! this.currentItemId )
      this.CS.getCompteByRib(this.currentItemId).subscribe((item)=>{
        this.item1=item;
        console.log(item)
        this.initForm1(item)
      })
    else {this.initForm();}
    this.CS.getAllClients().subscribe(response => this.options= response.map(item => item.cin))
  }

  initForm1(item:Compte):void
  {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    console.log(item.client.cin)
    this.form=new FormGroup({
      client:new FormControl(item.client.cin,[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('^-?[0-9]*$')] ),
      solde:new FormControl(item.solde,[Validators.required]),
    })
    this.form.get('client').valueChanges.subscribe((response: string) => {
      this.filterData(response);
    });
  }

  initForm():void
  {
    this.form=new FormGroup({
      client:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('^-?[0-9]*$')] ),
      solde:new FormControl(null,[Validators.required]),
    })
    this.form.get('client').valueChanges.subscribe((response: string) => {
      console.log('data is ', response);
      this.filterData(response);
    });
   }
  
  filterData(enteredData: string){
    this.filteredOptions = this.options.filter((item: string) => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }
  onsub(client : string, solde : string):void{
    if(!! this.currentItemId ){
      this.CS.updateCompte(this.currentItemId,client,solde).subscribe ((te)=>
        {
          if(te){
          this.router.navigate(['./accounts']) 
          Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
          }
          else{
            Swal.fire('Canceled', 'Client does\'t exist!', 'error')
          }
        }
      )
    } else{
      this.CS.saveCompte(client,solde).subscribe ((te)=>
        {
          if(te){
          this.router.navigate(['./accounts']) 
          Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
          }
          else{
            Swal.fire('Canceled', 'Client does\'t exist!', 'error')
          }
        }
      )
    }

  }

}
