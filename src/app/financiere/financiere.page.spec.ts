import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierePage } from './financiere.page';

describe('FinancierePage', () => {
  let component: FinancierePage;
  let fixture: ComponentFixture<FinancierePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancierePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
