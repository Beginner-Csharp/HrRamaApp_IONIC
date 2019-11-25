import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Training3Page } from './training3.page';

describe('Training3Page', () => {
  let component: Training3Page;
  let fixture: ComponentFixture<Training3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Training3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Training3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
