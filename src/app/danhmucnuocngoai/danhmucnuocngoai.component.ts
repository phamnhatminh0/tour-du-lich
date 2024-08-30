import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-danhmucnuocngoai',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './danhmucnuocngoai.component.html',
  styleUrl: './danhmucnuocngoai.component.css'
})
export class DanhmucnuocngoaiComponent {
  danhmucnuocngoai: ProductInterface[] = [];
  prductService: ProductService = inject(ProductService);
  selectedSort: string = 'asc';
  constructor() {
    this.prductService.getListProducts('http://localhost:3000/products?danhMuc=nuocngoai').then((data: ProductInterface[]) => {
      this.danhmucnuocngoai = data;
      console.table(this.danhmucnuocngoai);
    }
    );
  }
  onSortChange(): void {
    if (this.selectedSort === 'asc') {
      this.danhmucnuocngoai.sort((a, b) => a.giaTour - b.giaTour); // Sắp xếp tăng dần
    } else {
      this.danhmucnuocngoai.sort((a, b) => b.giaTour - a.giaTour); // Sắp xếp giảm dần
    }
  }

}

