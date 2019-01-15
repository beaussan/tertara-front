import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPublicComponent } from './contact-public.component';

describe('ContactPublicComponent', () => {
  let component: ContactPublicComponent;
  let fixture: ComponentFixture<ContactPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
