import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DemandeTirage } from 'src/models/DemandeTirage';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DemandeTirageService } from '../services/demande-tirage.service';

@Component({
  selector: 'app-liste-demandes-tirage',
  templateUrl: './liste-demandes-tirage.component.html',
  styleUrls: ['./liste-demandes-tirage.component.css']
})
export class ListeDemandesTirageComponent implements OnInit {
  
  ngOnInit(): void {}
  //etape1 : Injecter le service  dans le composant
  constructor(private MS:DemandeTirageService, private dialog:MatDialog)
  {
    this.dataSource=new MatTableDataSource(this.MS.tab);//instanciation
  }
  checkStatus(status : string) {
    if(status == "en cours" || status == "terminée")
    return true;
    else return false;
  }
  // remplir datasource a partir du tableaux du service

  dataSource:MatTableDataSource<DemandeTirage>  ;//declaration
  displayedColumns: string[] = ['Id', 'Date', 'Heure','Nombre de copies', 'Enseignant','Matiere', 'Groupe','Etat','action'];

  OnRemove(id:string):void{
    // 1. ouvrir la boite de dialogue
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{
      width:'250px',
    });

    //2. attendre le retour de l'utilisateur
    dialogRef.afterClosed().subscribe((isdeleted)=>{
   //3. tester le retour
    //4. if (retourne=confirm)=supression
   if (isdeleted)this.MS.deleteDemandeByID(id).then(()=>this.fetch());
    })
  //appeler une fonction dans le service qui va effacer la ligne a partire du tableaux tab du service
    //this.MS.deleteMemberByID(id).then(()=>{this.dataSource=this.MS.tab});//////

  }
  fetch():void {
    this.MS.getAllDemandes().then((data)=>{this.dataSource.data=data})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
