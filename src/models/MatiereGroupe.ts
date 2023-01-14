import { Groupe } from "./Groupe";
import { Matiere } from "./Matiere";
import { Utilisateur } from "./Utilisateur";

export interface MatiereGroupe
{
    id : string,
    matiere : Matiere,
    groupe : Groupe,
    enseignant : Utilisateur
}

