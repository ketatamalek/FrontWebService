import { Component, OnInit } from '@angular/core';
import {MatCalendarCellClassFunction} from "@angular/material/datepicker";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Member} from "../../models/Member";
import {ToolsService} from "../services/tools.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tool} from "../../models/Tool";

@Component({
  selector: 'app-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.css']
})
export class ToolFormComponent implements OnInit {
  currentItemId :string="";
  form: any;
  item1:any;
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  constructor(private  TS:ToolsService,private router:Router, private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.currentItemId=this.activatedRoute.snapshot.params['id'];
    if(!! this.currentItemId )
      this.TS.getMemberById(this.currentItemId).then((item)=>{
        this.item1=item;
        this.initForm1(item)
      })
    else {this.initForm();}  }
  initForm():void
  {
    this.form=new FormGroup({
      lien:new FormControl(null,[Validators.required] ),
      date:new FormControl(null,[]),
    })
  }
  initForm1(item:Tool):void
  {
    this.form=new FormGroup({
      lien:new FormControl(item.lien,[Validators.required] ),
      date:new FormControl(item.date,[]),
    })
  }
  onsub() {
      //console.log(this.form.value)
    const ToolTosave : Tool= {...this.item1,...this.form.value};
    this.TS.saveTool(ToolTosave).then (()=>
    {this.router.navigate(['./tools']) } )
  }

}
