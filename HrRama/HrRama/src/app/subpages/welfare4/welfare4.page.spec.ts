import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welfare4Page } from './welfare4.page';

describe('Welfare4Page', () => {
  let component: Welfare4Page;
  let fixture: ComponentFixture<Welfare4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welfare4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welfare4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
