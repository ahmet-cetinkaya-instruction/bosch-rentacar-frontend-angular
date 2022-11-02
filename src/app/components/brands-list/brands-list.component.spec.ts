import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsListComponent } from './brands-list.component';

describe('BrandsListComponent', () => {
  let component: BrandsListComponent;
  let fixture: ComponentFixture<BrandsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
