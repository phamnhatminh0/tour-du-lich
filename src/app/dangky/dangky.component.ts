import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-dangky',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dangky.component.html',
  styleUrl: './dangky.component.css'
})
export class DangkyComponent {
  email: string = "";
  username: string = "";
  password: string = "";
  repassword: string = "";

  isEmailValid(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  constructor(private router: Router) { }
  async onSubmit(): Promise<void> {
    if (!this.email || !this.username || !this.password || !this.repassword) { return; }
    if (this.password !== this.repassword) { return; }
    if (!this.isEmailValid(this.email)) { return; }
    if (!this.isPasswordValid(this.password)) { return; }
    const hashedPassword = bcrypt.hashSync(this.password, 10);
    const user = {
      username: this.username,
      email: this.email,
      password: hashedPassword,
      role: 'user'
    }
    console.log(user);
    //check trung username
    try {
      const response = await fetch('http://localhost:3000/users?username=' + this.username);
      const data = await response.json();
      if (data.length > 0) {
        alert('user name đã tồn tại hãy nhập khác')
        return;
      }

    } catch (error) {
      console.error('lỗi', error);
    }
    //check email
    try {
      const response = await fetch('http://localhost:3000/users?email=' + this.email);
      const data = await response.json();
      if (data.length > 0) {
        alert('email đã tồn tại hãy nhập khác')
        return;
      }

    } catch (error) {
      console.error('lỗi', error);
    }
    const url = 'http://localhost:3000/users'; // Thay đổi URL theo cài đặt JSON Server
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log('đã thêm thành công', data);
      this.router.navigate(['/dangnhap']);


    } catch (error) {
      console.error('lỗi đăng ký', error);
    }

  }
  isPasswordValid(password: string): boolean {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    // (?=.*\d)        //bao gồm ít nhất một chữ số
    // (?=.*[a-z])     //bao gồm ít nhất một chữ cái thường
    // (?=.*[A-Z])     //bao gồm ít nhất một chữ cái viết hoa
    // .{8,20}         //có từ 8 đến 20 ký tự
    return re.test(password);
  }
}
