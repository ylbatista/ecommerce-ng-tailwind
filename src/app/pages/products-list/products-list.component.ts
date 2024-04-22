import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ CommonModule, RouterModule, ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export default class ProductsListComponent {


  products: Product[] = [];
  itemsPerPage: number = 12;
  currentPage: number = 1;

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.productsService.getAllProducts().pipe(
    
    ).subscribe(data => {
      this.products = data;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  get productsToShow(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
    console.log( page );
    
  }

  // Genero array de números de página para usar en el HTML
  getPageArray(): number[] {
    const pageCount = Math.ceil(this.totalPages / 5); // Calcula el número de grupos de 5 páginas
    const startPage = (Math.floor((this.currentPage - 1) / 5)) * 5 + 1; // Calcula la primera página del grupo actual
    return Array(pageCount).fill(0).map((_, i) => startPage + i);
  }

  sendProductSelectedData( product: Product ) {
    // console.log(product);
    this.router.navigate(['/product-details'], {state: { product }});
  }

}
