import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondialePage } from './mondiale.page';

describe('MondialePage', () => {
  let component: MondialePage;
  let fixture: ComponentFixture<MondialePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondialePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondialePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
