import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPa2Page } from './work-pa2.page';

describe('WorkPa2Page', () => {
  let component: WorkPa2Page;
  let fixture: ComponentFixture<WorkPa2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPa2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPa2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
