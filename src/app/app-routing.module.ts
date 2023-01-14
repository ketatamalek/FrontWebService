import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from "./profile/profile.component";
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { CompteComponent } from './compte/compte.component';
import { CompteFormComponent } from './compte-form/compte-form.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';
import { ListeMatieresComponent } from './liste-matieres/liste-matieres.component';
import { MatiereFormComponent } from './matiere-form/matiere-form.component';
import { ListeGroupesComponent } from './liste-groupes/liste-groupes.component';
import { GroupeFormComponent } from './groupe-form/groupe-form.component';
import { ListeDemandesTirageComponent } from './liste-demandes-tirage/liste-demandes-tirage.component';
import { DemandeTirageFormComponent } from './demande-tirage-form/demande-tirage-form.component';

const routes: Routes = [
  {
    path :'',
    pathMatch :'full',
    redirectTo:'login'
  },
  {
    path : 'login',
    pathMatch :'full',
    component: LoginComponent,
  },
  {
    path : 'profile',
    pathMatch :'full',
    component: ProfileComponent,
  },
  {
    path : 'utilisateurs',
    pathMatch :'full',
    component: ListeUtilisateursComponent,
  },
  {
    path : 'utilisateurs/create',
    pathMatch :'full',
    component: UtilisateurFormComponent,
  },
  {
    path : 'utilisateurs/:id/edit',
    pathMatch :'full',
    component: UtilisateurFormComponent,
  },
  {
    path : 'matieres',
    pathMatch :'full',
    component: ListeMatieresComponent,
  },
  {
    path : 'matieres/create',
    pathMatch :'full',
    component: MatiereFormComponent,
  },
  {
    path : 'matieres/:id/edit',
    pathMatch :'full',
    component: MatiereFormComponent,
  },
  {
    path : 'groupes',
    pathMatch :'full',
    component: ListeGroupesComponent,
  },
  {
    path : 'groupes/create',
    pathMatch :'full',
    component: GroupeFormComponent,
  },
  {
    path : 'groupes/:id/edit',
    pathMatch :'full',
    component: GroupeFormComponent,
  },
  {
    path : 'demandes',
    pathMatch :'full',
    component: ListeDemandesTirageComponent,
  },
  {
    path : 'demandes/create',
    pathMatch :'full',
    component: DemandeTirageFormComponent,
  },
  {
    path : 'demandes/:id/edit',
    pathMatch :'full',
    component: DemandeTirageFormComponent,
  },
  {
    path : 'dashboard',
    pathMatch :'full',
    component: DashboardComponent,
  },
  {
    path : '**',
    redirectTo:'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
