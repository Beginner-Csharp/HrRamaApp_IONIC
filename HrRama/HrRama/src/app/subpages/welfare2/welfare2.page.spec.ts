import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welfare2Page } from './welfare2.page';

describe('Welfare2Page', () => {
  let component: Welfare2Page;
  let fixture: ComponentFixture<Welfare2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welfare2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welfare2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
