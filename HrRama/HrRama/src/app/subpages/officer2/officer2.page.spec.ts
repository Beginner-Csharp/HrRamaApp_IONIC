import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Officer2Page } from './officer2.page';

describe('Officer2Page', () => {
  let component: Officer2Page;
  let fixture: ComponentFixture<Officer2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Officer2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Officer2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
