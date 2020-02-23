import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from 'src/app/service/produit.service';
import { Rayon } from 'src/app/entities/rayon';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css']
})
export class RayonComponent implements OnInit {
  rayonForm: FormGroup;
  rayon: Rayon = new Rayon();
  rayons: Rayon[]=[];
  constructor(private produitService: ProduitService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rayonForm = this.formBuilder.group({
      libelle: ["",Validators.required],
      description: [""]
    });
    this.getRayons();
  }
  getRayons(){
    this.produitService.listeRayon().subscribe(data => {
      this.rayons=data;
      console.log(data);
    });
  }
  save(rayonForm:FormGroup){
    this.produitService.saveRayon(this.rayonForm.value).subscribe(data=>{
      this.rayon = data;
      console.log(" save rayon"+JSON.stringify(this.rayon));
      this.rayons.push(data)
    })
    
  }
  onEdit(rayon:Rayon){
    console.log(rayon)
  }
  onDelete(rayon:Rayon){
    console.log(rayon)
  }
}
