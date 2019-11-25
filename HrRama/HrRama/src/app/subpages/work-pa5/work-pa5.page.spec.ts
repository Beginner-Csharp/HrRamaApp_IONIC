import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPa5Page } from './work-pa5.page';

describe('WorkPa5Page', () => {
  let component: WorkPa5Page;
  let fixture: ComponentFixture<WorkPa5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPa5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPa5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
