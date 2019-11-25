import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Officer1Page } from './officer1.page';

describe('Officer1Page', () => {
  let component: Officer1Page;
  let fixture: ComponentFixture<Officer1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Officer1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Officer1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
