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
  show: boolean;


  @ViewChild('form') form;
  service: ProductService;
  products: any[];
  message: string;
  value: string;

  constructor(@Inject(ProductService) service) {
    this.service = service;
    this.products = [];
    this.message = '';
    this.newProduct = {
      name: '',
      description: '',
      price: ''
    };
    this.show = true;
    this.value = 'Made in India';
    this.changeValue();

  }

  changeValue() {
    this.value += '.';
    setTimeout(() => this.changeValue(), 5000);
  }

  ngOnInit() {
    this.fetchPrices();
  }

  updateData(data) {
    this.products = data;
  }

  updateError(error) {
    console.log(error);
    this.message = error;
  }

  createProduct() {
    for(const control in this.form.controls) {
      this.form.controls[control].markAsDirty();
      this.form.controls[control].updateValueAndValidity();
    }

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
