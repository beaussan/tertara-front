import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPublicComponent } from './question-public.component';

describe('QuestionPublicComponent', () => {
  let component: QuestionPublicComponent;
  let fixture: ComponentFixture<QuestionPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
