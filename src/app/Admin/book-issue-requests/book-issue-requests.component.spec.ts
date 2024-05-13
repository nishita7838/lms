import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIssueRequestsComponent } from './book-issue-requests.component';

describe('BookIssueRequestsComponent', () => {
  let component: BookIssueRequestsComponent;
  let fixture: ComponentFixture<BookIssueRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookIssueRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookIssueRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
