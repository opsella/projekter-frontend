import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTableContentComponent } from './project-table-content.component';

describe('ProjectTableContentComponent', () => {
  let component: ProjectTableContentComponent;
  let fixture: ComponentFixture<ProjectTableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ProjectTableContentComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
