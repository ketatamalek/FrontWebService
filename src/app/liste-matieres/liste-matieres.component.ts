import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Matiere } from 'src/models/Matiere';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatiereService } from '../services/matiere.service';


@Component({
  selector: 'app-liste-matieres',
  templateUrl: './liste-matieres.component.html',
  styleUrls: ['./liste-matieres.component.css']
})
export class ListeMatieresComponent implements OnInit {

  ngOnInit(): void {}
  //etape1 : Injecter le service  dans le composant
  constructor(private MS:MatiereService, private dialog:MatDialog)
  {
    this.dataSource=new MatTableDataSource(this.MS.tab);//instanciation
  }
  // remplir datasource a partir du tableaux du service

  dataSource:MatTableDataSource<Matiere>  ;//declaration
  displayedColumns: string[] = ['Id', 'Nom','action'];

  OnRemove(id:string):void{
    // 1. ouvrir la boite de dialogue
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{
      width:'250px',
    });

    //2. attendre le retour de l'utilisateur
    dialogRef.afterClosed().subscribe((isdeleted)=>{
   //3. tester le retour
    //4. if (retourne=confirm)=supression
   if (isdeleted)this.MS.deleteMatiereByID(id).then(()=>this.fetch());
    })
  //appeler une fonction dans le service qui va effacer la ligne a partire du tableaux tab du service
    //this.MS.deleteMemberByID(id).then(()=>{this.dataSource=this.MS.tab});//////

  }
  fetch():void {
    this.MS.getAllMatieres().then((data)=>{this.dataSource.data=data})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
