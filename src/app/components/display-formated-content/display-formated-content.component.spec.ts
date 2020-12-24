import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormatedContentComponent } from './display-formated-content.component';

describe('DisplayFormatedContentComponent', () => {
  let component: DisplayFormatedContentComponent;
  let fixture: ComponentFixture<DisplayFormatedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFormatedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFormatedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
