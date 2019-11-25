import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Benefit4Page } from './benefit4.page';

describe('Benefit4Page', () => {
  let component: Benefit4Page;
  let fixture: ComponentFixture<Benefit4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Benefit4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Benefit4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
