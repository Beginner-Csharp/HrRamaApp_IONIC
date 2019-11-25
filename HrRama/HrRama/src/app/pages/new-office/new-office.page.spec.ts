import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOfficePage } from './new-office.page';

describe('NewOfficePage', () => {
  let component: NewOfficePage;
  let fixture: ComponentFixture<NewOfficePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOfficePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOfficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
