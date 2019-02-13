import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  newProduct:any;

  @ViewChild('form') form;

  constructor() {
    this.newProduct = {
      name: 'Awesome',
      description: 'Product Awesome Description',
      price: 10.12
    };
  }

  ngOnInit() {

  }

  createProduct() {
    for(const control in this.form.controls) {
      this.form.controls[control].markAsDirty();
      this.form.controls[control].updateValueAndValidity();
      console.log(this.form.controls[control].value + ' valid: '+this.form.controls[control].valid);
    }
    console.log(this.form.valid);

    if(this.form.valid) {
      alert('Sending to server not yet implemented!');
    }
  }


}
