import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerPage } from './officer.page';

describe('OfficerPage', () => {
  let component: OfficerPage;
  let fixture: ComponentFixture<OfficerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
