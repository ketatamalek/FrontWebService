import { Groupe } from "./Groupe";
import { Matiere } from "./Matiere";
import { Utilisateur } from "./Utilisateur";

export interface DemandeTirage
{
    id:string;
    date:string;
    heure :number;
    nbCopies :number;
    status :string;
    enseignant: Utilisateur;
    matiere : Matiere;
    groupe : Groupe
}

