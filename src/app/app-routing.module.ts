import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RayonComponent } from './component/rayon/rayon.component';
import { ProduitComponent } from './component/produit/produit.component';
import { NotFoundComponent } from './component/not-found/not-found.component';


const routes: Routes = [
  {path: 'rayons', component: RayonComponent},
  {path: 'produits', component: ProduitComponent},
  {path: '', component: ProduitComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo:"/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
