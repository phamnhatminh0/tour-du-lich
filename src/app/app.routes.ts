import { Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ChitietsangphamComponent } from './chitietsangpham/chitietsangpham.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { VechungtoiComponent } from './vechungtoi/vechungtoi.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { DanhmucnuocngoaiComponent } from './danhmucnuocngoai/danhmucnuocngoai.component';
import { HosotaikhoanComponent } from './hosotaikhoan/hosotaikhoan.component';
import { TimkiemComponent } from './timkiem/timkiem.component';


export const routes: Routes = [
    //tự động vào component trang chủ
    { path: '', redirectTo: 'trangchu', pathMatch: 'full' },
    //trang chủ ->component trang chủ
    { path: 'trangchu', component: TrangchuComponent },
    { path: 'lienhe', component: LienheComponent },
    { path: 'giohang', component: GiohangComponent },
    { path: 'danhmuctrongnuoc', component: DanhmucComponent },
    { path: 'danhmucnuocngoai', component: DanhmucnuocngoaiComponent },
    { path: 'chitietsangpham/:id', component: ChitietsangphamComponent },
    { path: 'dangnhap', component: DangnhapComponent },
    { path: 'dangky', component: DangkyComponent },
    { path: 'vechungtoi', component: VechungtoiComponent },
    { path: 'hosotaikhoan', component: HosotaikhoanComponent },
    { path: 'timkiem', component: TimkiemComponent },
];