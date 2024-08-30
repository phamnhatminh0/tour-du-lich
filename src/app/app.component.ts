import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dulich';
  productService: ProductService = inject(ProductService);
  UserService: UserService = inject(UserService);
  constructor(private router: Router) { }
  //Chức năng tìm kiếm
  onSearch(inputsearch: string) {
    this.productService.setKeyword(inputsearch);
    console.log(inputsearch);
    if (this.router.url === '/timkiem') {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/timkiem']);
    } else {
      this.router.navigate(['/timkiem']);
    }
  }
}
