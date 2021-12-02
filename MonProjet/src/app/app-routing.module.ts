import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';
const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
  {path : "add-produit", component : AddProduitComponent, canActivate:[ProduitGuard]},
  { path: "", redirectTo: "produits", pathMatch: "full" },  
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},


  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
