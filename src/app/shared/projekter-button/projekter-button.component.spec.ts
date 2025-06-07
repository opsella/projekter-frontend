import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekterButtonComponent } from './projekter-button.component';

describe('ProjekterButtonComponent', () => {
  let component: ProjekterButtonComponent;
  let fixture: ComponentFixture<ProjekterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjekterButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjekterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
