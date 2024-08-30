import { Component, inject } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-danhmuc',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './danhmuc.component.html',
  styleUrl: './danhmuc.component.css'
})
export class DanhmucComponent {
  danhmuctrongnuoc: ProductInterface[] = [];
  prductService: ProductService = inject(ProductService);
  selectedSort: string = 'asc';
  constructor() {
    this.prductService.getListProducts('http://localhost:3000/products?danhMuc=trongnuoc').then((data: ProductInterface[]) => {
      this.danhmuctrongnuoc = data;
      console.table(this.danhmuctrongnuoc);
    }
    );
  }
  onSortChange(): void {
    if (this.selectedSort === 'asc') {
      this.danhmuctrongnuoc.sort((a, b) => a.giaTour - b.giaTour); // Sắp xếp tăng dần
    } else {
      this.danhmuctrongnuoc.sort((a, b) => b.giaTour - a.giaTour); // Sắp xếp giảm dần
    }
  }
}
