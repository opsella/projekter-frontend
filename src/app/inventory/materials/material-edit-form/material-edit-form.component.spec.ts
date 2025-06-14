import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEditFormComponent } from './material-edit-form.component';

describe('MaterialEditFormComponent', () => {
  let component: MaterialEditFormComponent;
  let fixture: ComponentFixture<MaterialEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MaterialEditFormComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MaterialEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
