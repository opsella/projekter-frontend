import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsTableContentComponent } from './materials-table-content.component';

describe('MaterialsTableContentComponent', () => {
  let component: MaterialsTableContentComponent;
  let fixture: ComponentFixture<MaterialsTableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MaterialsTableContentComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsTableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
