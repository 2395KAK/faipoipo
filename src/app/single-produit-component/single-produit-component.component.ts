import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-produit-component',
  templateUrl: './single-produit-component.component.html',
  styleUrls: ['./single-produit-component.component.css']
})
export class SingleProduitComponentComponent implements OnInit {

  name: string = 'Appareil';
  nb: number = 0;

  constructor(private produitService: ProduitService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.produitService.getProduitById(+id).name;
    this.nb = this.produitService.getProduitById(+id).nb;
  }

}
