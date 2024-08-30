import { Component, inject } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trangchu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trangchu.component.html',
  styleUrl: './trangchu.component.css'
})
export class TrangchuComponent {
  tourhottrongnuoc: ProductInterface[] = [];
  tourhotngoainuoc: ProductInterface[] = [];
  prductService: ProductService = inject(ProductService);
  constructor() {
    this.prductService.getListProducts('http://localhost:3000/products?danhMuc=trongnuoc').then((data: ProductInterface[]) => {
      this.tourhottrongnuoc = data;
      console.table(this.tourhottrongnuoc);
    }
    );
    this.prductService.getListProducts('http://localhost:3000/products?danhMuc=nuocngoai').then((data: ProductInterface[]) => {
      this.tourhotngoainuoc = data;
      console.table(this.tourhotngoainuoc);
    }
    );

  }
}
