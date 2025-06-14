import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionTableContentComponent } from './expansion-table-content.component';

describe('ExpansionTableContentComponent', () => {
  let component: ExpansionTableContentComponent;
  let fixture: ComponentFixture<ExpansionTableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ExpansionTableContentComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionTableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
