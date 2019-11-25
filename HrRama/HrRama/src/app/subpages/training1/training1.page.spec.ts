import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Training1Page } from './training1.page';

describe('Training1Page', () => {
  let component: Training1Page;
  let fixture: ComponentFixture<Training1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Training1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Training1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
