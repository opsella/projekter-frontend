import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageWrapperComponent } from './list-page-wrapper.component';

describe('ListPageWrapperComponent', () => {
  let component: ListPageWrapperComponent;
  let fixture: ComponentFixture<ListPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPageWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
