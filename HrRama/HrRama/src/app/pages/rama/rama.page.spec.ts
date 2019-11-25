import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaPage } from './rama.page';

describe('RamaPage', () => {
  let component: RamaPage;
  let fixture: ComponentFixture<RamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
