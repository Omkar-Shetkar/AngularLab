import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  newProduct:any;
 
  constructor() { 
    this.newProduct = {
      name: 'Awessome',
      description: 'Product Awesome Description',
      price: 10.12
    };
  }

  ngOnInit() {
    
  }

  
}
