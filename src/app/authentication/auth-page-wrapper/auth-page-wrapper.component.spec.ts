import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageWrapperComponent } from './auth-page-wrapper.component';

describe('AuthPageWrapperComponent', () => {
  let component: AuthPageWrapperComponent;
  let fixture: ComponentFixture<AuthPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPageWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
