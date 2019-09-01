import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  constructor(private produitService: ProduitService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const nb = form.value['nb'];

    this.produitService.addProduit(name, nb);
    this.router.navigate(['/cambuse']);
  }

}
