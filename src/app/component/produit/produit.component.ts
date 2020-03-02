import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produit } from 'src/app/entities/produit';
import { ProduitService } from 'src/app/service/produit.service';
import { Rayon } from 'src/app/entities/rayon';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produitForm: FormGroup;
  produit: Produit = new Produit();
  produits: Produit[]=[];
  rayons: Rayon[] = [];
  constructor(private produitService: ProduitService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //formGroup Produit
    this.produitForm = this.formBuilder.group({
      refProduit: ['',Validators.required],
      libelle: ['',Validators.required],
      quantite: [''],
      prixUnitaire: [''],
      seuilAlerte: [''],
      seuilMax: [''],
      rayonId: ['',Validators.required]
    });
    this.getProduits();
    this.getRayons();
  }
  getProduits(){
      this.produitService.listeProduit().subscribe(data => {
      this.produits=data;
      console.log(data);
    });
  }
  getRayons(){
    this.produitService.listeRayon().subscribe(data => {
      this.rayons=data;
      console.log(data);
    });
  }
  
  save(produitForm:FormGroup){
    this.produitService.saveProduit(this.produitForm.value).subscribe(data=>{
      this.produit = data;
      console.log(" save produit"+JSON.stringify(this.produit));
      this.produits.push(data)
    })
    
  }
  onEdit(produit:Produit){
    console.log(produit);
  }

  onDelete(produit:Produit){
    console.log(produit)
  }

}
