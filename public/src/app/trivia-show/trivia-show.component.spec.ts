import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaShowComponent } from './trivia-show.component';

describe('TriviaShowComponent', () => {
  let component: TriviaShowComponent;
  let fixture: ComponentFixture<TriviaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
