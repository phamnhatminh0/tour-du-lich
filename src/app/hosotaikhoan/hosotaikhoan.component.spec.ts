import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosotaikhoanComponent } from './hosotaikhoan.component';

describe('HosotaikhoanComponent', () => {
  let component: HosotaikhoanComponent;
  let fixture: ComponentFixture<HosotaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HosotaikhoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HosotaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
