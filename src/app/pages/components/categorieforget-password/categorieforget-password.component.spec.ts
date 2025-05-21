import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieforgetPasswordComponent } from './categorieforget-password.component';

describe('CategorieforgetPasswordComponent', () => {
  let component: CategorieforgetPasswordComponent;
  let fixture: ComponentFixture<CategorieforgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieforgetPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieforgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
