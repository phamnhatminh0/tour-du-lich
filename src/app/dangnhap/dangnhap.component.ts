import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dangnhap',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dangnhap.component.html',
  styleUrl: './dangnhap.component.css'
})
export class DangnhapComponent {
  email: string = "";
  password: string = "";
  UserService: UserService = inject(UserService);
  constructor(private router: Router) { }
  async onSubmit(): Promise<void> {
    if (!this.email || !this.password) {
      return;
    }
    try {
      const reponse = await fetch('http://localhost:3000/users?email=' + this.email)
      const data = await reponse.json();
      if (data.length == 0) {
        alert('email hoặt mật khẩu sai');
        return;
      }
      if (!bcrypt.compareSync(this.password, data[0].password)) {
        alert("email hoặt mật khẩu sai");
        return;
      }
      else {
        alert("Đăng nhập thành công");
        this.UserService.setUser(data[0]);
        this.router.navigate(['/']);
      }
    }
    catch (error) {
      console.log('loi:', error);

    }
  }
}
