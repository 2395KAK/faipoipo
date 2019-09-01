import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RefProduitService } from '../services/ref-produit.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ref-produit',
  templateUrl: './ref-produit.component.html',
  styleUrls: ['./ref-produit.component.css']
})
export class RefProduitComponent implements OnInit {

  listRefProduit: any[];
  listRefProduitSubscription: Subscription;

  constructor(private refProduitService: RefProduitService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.listRefProduitSubscription = this.refProduitService.refProduitsSubject.subscribe(
      (refProduits: any[]) => {
        this.listRefProduit = refProduits;
      }
    );
    this.refProduitService.emitRefProduitSubject();
  }

  ngOnDestroy() {
    this.listRefProduitSubscription.unsubscribe();
  }

}
