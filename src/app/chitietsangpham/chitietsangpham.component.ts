import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product-interface';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chitietsangpham',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chitietsangpham.component.html',
  styleUrl: './chitietsangpham.component.css'
})
export class ChitietsangphamComponent {
  productdetail?: ProductInterface;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProductDetail('http://localhost:3000/products/' + id).then((data: ProductInterface) => {
      this.productdetail = data;
      console.log(this.productdetail);
    });
  }
  addCart(quantity: string): void {
    if (this.productdetail) {
      this.productService.addCart(this.productdetail, parseInt(quantity, 10));
      console.log(this.productService.getCartLength());
    }
  }

}
