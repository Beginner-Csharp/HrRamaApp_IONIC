import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Benefit1Page } from './benefit1.page';

describe('Benefit1Page', () => {
  let component: Benefit1Page;
  let fixture: ComponentFixture<Benefit1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Benefit1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Benefit1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
