import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturellePage } from './culturelle.page';

describe('CulturellePage', () => {
  let component: CulturellePage;
  let fixture: ComponentFixture<CulturellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturellePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
