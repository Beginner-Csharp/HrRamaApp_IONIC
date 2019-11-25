import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPAPage } from './work-pa.page';

describe('WorkPAPage', () => {
  let component: WorkPAPage;
  let fixture: ComponentFixture<WorkPAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
