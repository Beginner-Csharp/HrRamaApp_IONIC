import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welfare3Page } from './welfare3.page';

describe('Welfare3Page', () => {
  let component: Welfare3Page;
  let fixture: ComponentFixture<Welfare3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welfare3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welfare3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
