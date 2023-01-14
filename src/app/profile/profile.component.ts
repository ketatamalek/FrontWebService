import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentItemId :string="";
  item1:any;
  form :any;

  constructor( private activatedRoute :ActivatedRoute) {

  }

  ngOnInit(): void {
    
  }

}
