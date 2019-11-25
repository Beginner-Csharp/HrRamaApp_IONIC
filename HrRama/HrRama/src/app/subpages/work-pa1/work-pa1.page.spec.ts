import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPa1Page } from './work-pa1.page';

describe('WorkPa1Page', () => {
  let component: WorkPa1Page;
  let fixture: ComponentFixture<WorkPa1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPa1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
