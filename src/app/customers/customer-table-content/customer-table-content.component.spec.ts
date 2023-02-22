import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTableContentComponent } from './customer-table-content.component';

describe('CustomerTableContentComponent', () => {
  let component: CustomerTableContentComponent;
  let fixture: ComponentFixture<CustomerTableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTableContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
