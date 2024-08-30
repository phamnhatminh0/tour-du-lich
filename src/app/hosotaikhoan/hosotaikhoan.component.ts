import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hosotaikhoan',
  standalone: true,
  imports: [],
  templateUrl: './hosotaikhoan.component.html',
  styleUrl: './hosotaikhoan.component.css'
})
export class HosotaikhoanComponent {
  UserService: UserService = inject(UserService);
  user = this.UserService.getUser();
  constructor(private router: Router) { }
  logOut() {
    this.UserService.logOut()
    this.router.navigate(['/dangnhap']);

  }
}
