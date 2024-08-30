import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucnuocngoaiComponent } from './danhmucnuocngoai.component';

describe('DanhmucnuocngoaiComponent', () => {
  let component: DanhmucnuocngoaiComponent;
  let fixture: ComponentFixture<DanhmucnuocngoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanhmucnuocngoaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanhmucnuocngoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
