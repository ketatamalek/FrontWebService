import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/models/Client';
import Swal from 'sweetalert2';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  ngOnInit(): void {
    this.fetch();
    console.log(this.dataSource.data);
  }
  //etape1 : Injecter le service  dans le composant
  constructor(private MS:ClientService, private dialog:MatDialog)
  {
    this.dataSource=new MatTableDataSource();//instanciation
  }
  
  dataSource:MatTableDataSource<Client>  ;//declaration
  displayedColumns: string[] = ['Cin', 'Nom', 'Prenom','Adresse','action'];

  OnRemove(id:string):void{
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this client!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.MS.deleteClientByCIN(id).subscribe((te)=>{
          this.fetch();
          if(te){
            Swal.fire(
              'Deleted!',
              'Your client has been deleted.',
              'success'
              );
          }
          
        else{
          
          Swal.fire(
            'Cancelled',
            'Your client have an account :)',
            'error'
          )
        }
        });
          
        
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your client is safe :)',
          'error'
        )
      }
    })

  }
  fetch():void {
    this.MS.getAllClients().subscribe((data)=>{this.dataSource.data=data})
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
