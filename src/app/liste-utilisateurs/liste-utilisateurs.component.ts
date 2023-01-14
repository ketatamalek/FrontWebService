import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Utilisateur } from 'src/models/Utilisateur';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UtilisateurService } from '../services/utilisateur.service';


@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {

  ngOnInit(): void {}
  //etape1 : Injecter le service  dans le composant
  constructor(private MS:UtilisateurService, private dialog:MatDialog)
  {
    this.dataSource=new MatTableDataSource(this.MS.tab);//instanciation
  }
  // remplir datasource a partir du tableaux du service

  dataSource:MatTableDataSource<Utilisateur>  ;//declaration
  displayedColumns: string[] = ['Id','Username', 'Email','Pwd', 'Role','action'];

  OnRemove(id:string):void{
    // 1. ouvrir la boite de dialogue
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{
      width:'250px',
    });

    //2. attendre le retour de l'utilisateur
    dialogRef.afterClosed().subscribe((isdeleted)=>{
   //3. tester le retour
    //4. if (retourne=confirm)=supression
   if (isdeleted)this.MS.deleteUserByID(id).then(()=>this.fetch());
    })
  //appeler une fonction dans le service qui va effacer la ligne a partire du tableaux tab du service
    //this.MS.deleteMemberByID(id).then(()=>{this.dataSource=this.MS.tab});//////

  }
  fetch():void {
    this.MS.getAllUsers().then((data)=>{this.dataSource.data=data})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
