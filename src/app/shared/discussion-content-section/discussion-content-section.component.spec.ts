import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionContentSectionComponent } from './discussion-content-section.component';

describe('DiscussionContentSectionComponent', () => {
  let component: DiscussionContentSectionComponent;
  let fixture: ComponentFixture<DiscussionContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionContentSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
