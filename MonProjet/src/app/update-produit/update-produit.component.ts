import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model'; 
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private produitService: ProduitService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);

    this.produitService.consulterProdui(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentProduit = prod; } ) ;
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
