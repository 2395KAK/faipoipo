import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RefProduitService } from '../services/ref-produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-ref-produit',
  templateUrl: './edit-ref-produit.component.html',
  styleUrls: ['./edit-ref-produit.component.css']
})
export class EditRefProduitComponent implements OnInit {

  constructor(private refProduitsService: RefProduitService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];

    this.refProduitsService.addRefProduit(name);
    this.router.navigate(['/ref-produits']);
  }

}
