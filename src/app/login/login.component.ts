import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  tryGoogleLogin():void{
    // 1/se connecter sur firebase 
    //et verifier le fournisseur de service google
    this.authservice.doGoogleLogin().then(()=>this.succesRedirect())
  }
  succesRedirect():void
  {
    //2/ redirection sur la page /dashboard
    this.authservice.getUserClaims().then((item)=>console.log(item))
    this.ngZone.run(()=>
    this.router.navigate(['/dashboard']));

  }
  constructor(private authservice:AuthService, private router:Router,private ngZone:NgZone) { }

  ngOnInit(): void {
  }

}
