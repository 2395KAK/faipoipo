import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RefTypeProduitService } from '../services/ref-type-produit.service';

@Component({
  selector: 'ref-type-produit',
  templateUrl: './ref-type-produit.component.html',
  styleUrls: ['./ref-type-produit.component.css']
})
export class RefTypeProduitComponent implements OnInit {

  listRefTypeProduit: any[];
  listRefTypeProduitSubscription: Subscription;

  constructor(private refTypeProduitService: RefTypeProduitService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.listRefTypeProduitSubscription = this.refTypeProduitService.refTypeProduitsSubject.subscribe(
      (refTypeProduits: any[]) => {
        this.listRefTypeProduit = refTypeProduits;
      }
    );
    this.refTypeProduitService.emitRefTypeProduitSubject();
  }

  ngOnDestroy() {
    this.listRefTypeProduitSubscription.unsubscribe();
  }

}
