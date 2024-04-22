import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {


  products: Product[] = [];

  categories: any[] = [];
  isDropdownOpen: boolean = false;
  isActive: boolean = false;
  isMobileMenuOpen: boolean = false;

  constructor(
    private readonly productsService: ProductsService,
  ){}
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isActive = !this.isActive;
  }
 
  
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((resp: Product[]) => {
      console.log(resp);
    
      // Extraer categorías de los productos
      const categories = resp.map(product => product.Category);
    
      // Eliminar duplicados
      this.categories = Array.from(new Set(categories));
    
      console.log(this.categories);
    });
  }
 
}
