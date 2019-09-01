import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produitsSubscription: Subscription;
  cambuse: any[];

  @Input() produitName: string;
  @Input() produitNb: number;
  @Input() index: number;
  @Input() id: number;

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.produitsSubscription = this.produitService.produitsSubject.subscribe(
      (produits: any[]) => {
        this.cambuse = produits;
      }
    );
    this.produitService.emitProduitSubject();
  }

  getNb() {
    return this.produitNb;
  }

  getColor() {
    if (this.produitNb === 0) {
      return 'red';
    } else if (this.produitNb <= 10) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  onAdd(i: number) {
    this.produitService.addOne(i);
    this.produitService.emitProduitSubject();
  }

  onRemove(i: number) {
    this.produitService.removeOne(i);
    this.produitService.emitProduitSubject();
  }

  ngOnDestroy() {
    this.produitsSubscription.unsubscribe();
  }

}
