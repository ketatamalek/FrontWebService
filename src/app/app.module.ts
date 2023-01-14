import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirebaseModule } from 'src/Firebase.module';
import { LoginComponent } from './login/login.component';
import {MatNativeDateModule} from "@angular/material/core";
import { ProfileComponent } from './profile/profile.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientFormComponent } from './client-form/client-form.component';
import { CompteComponent } from './compte/compte.component';
import { CompteFormComponent } from './compte-form/compte-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AvatarModule } from 'ngx-avatar';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';
import { MatiereFormComponent } from './matiere-form/matiere-form.component';
import { ListeMatieresComponent } from './liste-matieres/liste-matieres.component';
import { ListeGroupesComponent } from './liste-groupes/liste-groupes.component';
import { GroupeFormComponent } from './groupe-form/groupe-form.component';
import { DemandeTirageFormComponent } from './demande-tirage-form/demande-tirage-form.component';
import { ListeDemandesTirageComponent } from './liste-demandes-tirage/liste-demandes-tirage.component';


@NgModule({
  declarations: [

    AppComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    ClientComponent,
    ClientFormComponent,
    CompteComponent,
    CompteFormComponent,
    ListeUtilisateursComponent,
    UtilisateurFormComponent,
    MatiereFormComponent,
    ListeMatieresComponent,
    ListeGroupesComponent,
    GroupeFormComponent,
    DemandeTirageFormComponent,
    ListeDemandesTirageComponent,

  ],
  imports: [
    MatIconModule,
    FormsModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,FirebaseModule,MatNativeDateModule,
    HighchartsChartModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
