import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export default class ProductDetailsComponent {

  product!: Product;

  colorDetail!: any[]

  constructor(

  ){}


  ngOnInit(){
    const product = history.state.product;
    console.log( product );
    this.product = product;
    this.colorDetail = product.Color_detail;

    console.log(this.colorDetail);
    
  }

}
