import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramStoriesComponent } from './instagram-stories.component';

describe('InstagramStoriesComponent', () => {
  let component: InstagramStoriesComponent;
  let fixture: ComponentFixture<InstagramStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstagramStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
