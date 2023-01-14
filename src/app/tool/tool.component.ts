import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Member} from "../../models/Member";
import {Tool} from "../../models/Tool";
import {ToolsService} from "../services/tools.service";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  dataSource:MatTableDataSource<Tool>

  constructor(private TS:ToolsService,private dialog:MatDialog) {
    this.dataSource=new MatTableDataSource(this.TS.tab);//instanciation

  }
  displayedColumns: string[] = ['Id', 'Date', 'Lien','action'];


  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OnRemove(id:string):void{
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{
      width:'250px',
    });
    dialogRef.afterClosed().subscribe((isdeleted)=>{
      if (isdeleted)this.TS.deleteMemberByID(id).then(()=>this.fetch());
    })
  }
  fetch():void {
    this.TS.getAllmembers().then((data)=>{this.dataSource.data=data})
  }
}
