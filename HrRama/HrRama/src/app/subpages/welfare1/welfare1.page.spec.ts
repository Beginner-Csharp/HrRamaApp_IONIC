import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welfare1Page } from './welfare1.page';

describe('Welfare1Page', () => {
  let component: Welfare1Page;
  let fixture: ComponentFixture<Welfare1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welfare1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welfare1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
