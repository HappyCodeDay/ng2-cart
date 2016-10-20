import { Component, OnInit, Input } from '@angular/core';
import {Query} from './query.modal';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {

  products: Array<{title:string,img:string,price:number}>;
  
  @Input() query:Query;

  constructor() {
   this.ngOnInit();
  }

  ngOnInit() {
  	this.products = [
      { title: 'Pack Of 3 Ralph Lauren Polo Shirt For Men',
  			price: 8.99,
  			img: './assets/img/t-shirt1.jpg',
  		},{
  			title: 'Pack Of 3 V-neck Full Sleeves T-Shirts For Him',
  			price: 6.49,
  			img: './assets/img/t-shirt2.jpg',
  		},{
  			title: 'Pack Of 2 CAT Hoodies For Him',
  			price: 2.00,
  			img: '../assets/img/t-shirt3.jpg',
  		},{
  			title: 'Pack Of 4 Causal V-Neck T-Shirts For Men',
  			price: 7.89,
  			img: '../assets/img/t-shirt4.jpg',
  		},{
  			title: 'Pack Of 3 Printed Round Neck T-Shirts For Men',
  			price: 8.99,
  			img: '../assets/img/t-shirt5.jpg',
  		}

  	];

  }

}
