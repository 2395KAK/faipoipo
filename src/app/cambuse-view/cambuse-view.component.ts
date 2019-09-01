import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cambuse-view',
  templateUrl: './cambuse-view.component.html',
  styleUrls: ['./cambuse-view.component.css']
})
export class CambuseViewComponent implements OnInit {

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  cambuse: any[];
  produitsSubscription: Subscription;

  constructor(private produitService: ProduitService, private authService: AuthService) { }

  ngOnInit() {
    this.produitsSubscription = this.produitService.produitsSubject.subscribe(
      (produits: any[]) => {
        this.cambuse = produits;
      }
    );
    this.produitService.emitProduitSubject();
  }

  ngOnDestroy() {
    this.produitsSubscription.unsubscribe();
  }

}
