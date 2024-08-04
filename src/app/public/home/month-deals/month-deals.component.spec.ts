import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDealsComponent } from './month-deals.component';

describe('MonthDealsComponent', () => {
  let component: MonthDealsComponent;
  let fixture: ComponentFixture<MonthDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthDealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
