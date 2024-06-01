import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideProgressComponent } from './slide-progress.component';

describe('SlideProgressComponent', () => {
  let component: SlideProgressComponent;
  let fixture: ComponentFixture<SlideProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
