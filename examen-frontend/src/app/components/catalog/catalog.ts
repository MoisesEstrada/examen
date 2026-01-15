import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.html',
  standalone: false
})
export class CatalogComponent implements OnInit {
  cats: any[] = [];
  prods: any[] = [];
  selectedCat: any = null;

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getCategories().subscribe({
      next: (res) => this.cats = res,
      error: (err) => console.error('Error cargando categorías', err)
    });

    this.ps.getAllProducts().subscribe({
      next: (res) => this.prods = res,
      error: (err) => console.error('Error cargando productos', err)
    });
  }

  onChange(): void {
    if (this.selectedCat) {
      this.ps.getProductsByCategory(+this.selectedCat).subscribe({
        next: (res) => this.prods = res,
        error: (err) => console.error('Error filtrando productos', err)
      });
    } else {
      this.ps.getAllProducts().subscribe({
        next: (res) => this.prods = res,
        error: (err) => console.error('Error recargando productos', err)
      });
    }
  }
}
