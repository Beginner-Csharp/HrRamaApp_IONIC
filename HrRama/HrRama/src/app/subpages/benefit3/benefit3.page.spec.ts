import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Benefit3Page } from './benefit3.page';

describe('Benefit3Page', () => {
  let component: Benefit3Page;
  let fixture: ComponentFixture<Benefit3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Benefit3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Benefit3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
