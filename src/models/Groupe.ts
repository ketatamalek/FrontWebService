import { Niveau } from "./Niveau";

export interface Groupe
{
    id:string;
    nbEtudiants:number;
    nom :string;
    niveau : Niveau
}

