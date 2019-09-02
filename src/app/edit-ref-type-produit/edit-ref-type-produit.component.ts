import { Component, OnInit } from '@angular/core';
import { RefTypeProduitService } from '../services/ref-type-produit.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'edit-ref-type-produit',
  templateUrl: './edit-ref-type-produit.component.html',
  styleUrls: ['./edit-ref-type-produit.component.css']
})
export class EditRefTypeProduitComponent implements OnInit {

  constructor(private refTypeProduitsService: RefTypeProduitService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];

    this.refTypeProduitsService.addRefTypeProduit(name);
    this.router.navigate(['/ref-type-produit']);
  }

}
