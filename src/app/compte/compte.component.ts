import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Compte } from 'src/models/Compte';
import Swal from 'sweetalert2';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  
  ngOnInit(): void {
    this.fetch();
  }
  //etape1 : Injecter le service  dans le composant
  constructor(private MS:CompteService, private dialog:MatDialog)
  {
    this.dataSource=new MatTableDataSource();//instanciation
  }
  
  dataSource:MatTableDataSource<Compte>  ;//declaration
  displayedColumns: string[] = ['rib', 'id_client', 'solde','action'];

  OnRemove(id:string):void{
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this account!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your account has been deleted.',
          'success'
        )
        this.MS.deleteCompteByRib(id).subscribe(()=>this.fetch());
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your account is safe :)',
          'error'
        )
      }
    })

  }
  fetch():void {
    this.MS.getAllComptes().subscribe((data)=>{this.dataSource.data=data})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
