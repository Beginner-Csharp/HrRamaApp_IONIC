import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Benefit2Page } from './benefit2.page';

describe('Benefit2Page', () => {
  let component: Benefit2Page;
  let fixture: ComponentFixture<Benefit2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Benefit2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Benefit2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
