import { Time } from '@angular/common';
import { Produit } from './produit';

export class Rayon {
    public id: number;
    public libelle: string;
    public description: string;
    public del: boolean=false;
    public dateCreate: Date;
    public heureCreate: Time;
    public dateLastUpdate: Date;
    public heureLastUpdate: Time;
    public produits?:Produit[];
}
