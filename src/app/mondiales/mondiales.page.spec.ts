import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondialesPage } from './mondiales.page';

describe('MondialesPage', () => {
  let component: MondialesPage;
  let fixture: ComponentFixture<MondialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondialesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
