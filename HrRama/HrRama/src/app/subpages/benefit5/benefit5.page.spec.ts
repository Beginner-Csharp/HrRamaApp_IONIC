import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Benefit5Page } from './benefit5.page';

describe('Benefit5Page', () => {
  let component: Benefit5Page;
  let fixture: ComponentFixture<Benefit5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Benefit5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Benefit5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
