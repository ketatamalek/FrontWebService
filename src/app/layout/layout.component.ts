import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  userName: any;
  photoURL : any;
  Logout():void
  {
    this.authservice.doLogout().then(()=>{this.router.navigate(['/login'])})
  }
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    
    this.authservice.getUserClaims().then((item)=>{
      this.userName=item._delegate.displayName;
      this.photoURL=item._delegate.photoURL;
    })
    
    
  }

}
