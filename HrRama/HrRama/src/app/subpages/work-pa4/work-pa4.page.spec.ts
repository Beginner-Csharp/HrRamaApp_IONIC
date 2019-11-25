import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPa4Page } from './work-pa4.page';

describe('WorkPa4Page', () => {
  let component: WorkPa4Page;
  let fixture: ComponentFixture<WorkPa4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPa4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPa4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
