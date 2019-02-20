import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from './../services/products.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [ ProductService ]
})
export class FormsComponent implements OnInit {

  newProduct:any;


  @ViewChild('form') form;
  service: ProductService;
  products: any[];
  message: string;

  constructor(@Inject(ProductService) service) {
    this.service = service;
    this.products = [];
    this.message = '';
    this.newProduct = {
      name: '',
      description: '',
      price: ''
    };
  }

  ngOnInit() {
    this.fetchPrices();
  }

  updateData(data) {
    this.products = data;
    console.log(this.products);
  }

  updateError(error) {
    console.log(error);
    this.message = error;
  }

  createProduct() {
    for(const control in this.form.controls) {
      this.form.controls[control].markAsDirty();
      this.form.controls[control].updateValueAndValidity();
      console.log(this.form.controls[control].value + ' valid: '+this.form.controls[control].valid);
    }
    console.log(this.form.valid);

    if(this.form.valid) {
      this.service.addProduct(this.newProduct).subscribe(
        data => this.refreshData(),
        error => this.updateError(error)
      );
    }
  }

  refreshData() {
    this.fetchPrices();
  }

  fetchPrices() {
    this.service.getProducts()
      .subscribe(data => this.updateData(data.body),
                error => this.updateError(error)
      );
  }


}
