import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPa3Page } from './work-pa3.page';

describe('WorkPa3Page', () => {
  let component: WorkPa3Page;
  let fixture: ComponentFixture<WorkPa3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPa3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPa3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
