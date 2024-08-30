import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietsangphamComponent } from './chitietsangpham.component';

describe('ChitietsangphamComponent', () => {
  let component: ChitietsangphamComponent;
  let fixture: ComponentFixture<ChitietsangphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietsangphamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitietsangphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
