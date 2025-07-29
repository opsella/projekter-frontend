import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionMessageBlockComponent } from './discussion-message-block.component';

describe('DiscussionMessageBlockComponent', () => {
  let component: DiscussionMessageBlockComponent;
  let fixture: ComponentFixture<DiscussionMessageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionMessageBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionMessageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
