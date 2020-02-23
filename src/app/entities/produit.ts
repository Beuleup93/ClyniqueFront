import { Time } from '@angular/common';
import { Rayon } from './rayon';
import { LigneVente } from './ligne-vente';
import { LigneLivraison } from './ligne-livraison';
import { LigneCommande } from './ligne-commande';

export class Produit {
    public id: number;
    public refProduit: string;
    public quantite: number;
    public libelle: string;
    public prixUnitaire: number;
    public seuilAlerte: number;
    public seuilMax?: number;
    public codeBarre: string;
    public del: boolean=false;
    public rayon: Rayon
    public dateCreate: Date;
    public heureCreate: Time;
    public dateLastUpdate: Date;
    public heureLastUpdate: Time;
    public ligneVentes?: LigneVente[];
    public ligneCommandes?: LigneCommande[];
    public ligneLivraisons?: LigneLivraison[];
}
