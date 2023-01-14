import { Groupe } from "./Groupe";
import { Matiere } from "./Matiere";
import { MatiereGroupe } from "./MatiereGroupe";
import { Utilisateur } from "./Utilisateur";

export interface DemandeTirage
{
    id:string;
    path :string;
    etat :string;
    affectation : MatiereGroupe;
}

