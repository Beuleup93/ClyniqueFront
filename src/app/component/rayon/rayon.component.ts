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
  isEdit: boolean;
  rayonForm: FormGroup;
  rayon: Rayon = new Rayon();
  rayons: Rayon[]=[];
  constructor(private produitService: ProduitService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rayonForm = this.formBuilder.group({
      id: [""],
      libelle: ["",Validators.required],
      description: [""]
    });
    this.getRayons();
  }
  //All RAYONS
  getRayons(){
    this.produitService.listeRayon().subscribe(data => {
      this.rayons=data;
      console.log(data);
    }); 
  }
  //Init form for save
  modalSave(){
    this.isEdit = false;
    this.initFields();
    console.log(this.isEdit);
  }

  //load data to Edit
  modalEdit(rayon:Rayon){
    this.isEdit = true;
    this.loadDataToFields(rayon);
    console.log(rayon);
    console.log(this.isEdit);
  }

  //Save or Update rayon
  saveOrUpdate(rayonForm:FormGroup){
    if(!this.isEdit){
      this.produitService.saveRayon(this.rayonForm.value).subscribe(data=>{
      this.rayon = data;
      console.log(" save rayon"+JSON.stringify(this.rayon));
      this.rayons.push(data)
      //this.getRayons;
      this.initFields();
      })
    }else{
      this.produitService.updateRayon(this.rayonForm.value).subscribe(data=>{
      this.rayon = data;
      console.log("Edit rayon "+JSON.stringify(this.rayon))
      //this.getRayons;
      this.initFields();
      this.ngOnInit();
      });
    }
  }

  //DELETE
  onDelete(rayon:Rayon){
    console.log(this.rayon.id);
    this.produitService.deleteRayon(rayon).subscribe(data=>{
      console.log("supprimer "+data);
      this.ngOnInit();
    });
    
  }
  //Reinitialiser Form
  initFields(){
    this.rayonForm.controls.libelle.setValue('');
    this.rayonForm.controls.description.setValue('');
    this.rayonForm.controls.id.setValue(null);
  }

  loadDataToFields(rayon: Rayon){
    this.rayonForm.controls.libelle.setValue(rayon.libelle);
    this.rayonForm.controls.description.setValue(rayon.description);
    this.rayonForm.controls.id.setValue(rayon.id);
  }
}
