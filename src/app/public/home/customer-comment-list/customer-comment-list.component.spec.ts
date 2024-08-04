import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCommentListComponent } from './customer-comment-list.component';

describe('CustomerCommentListComponent', () => {
  let component: CustomerCommentListComponent;
  let fixture: ComponentFixture<CustomerCommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCommentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
