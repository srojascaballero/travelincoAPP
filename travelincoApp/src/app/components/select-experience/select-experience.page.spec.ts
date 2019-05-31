import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExperiencePage } from './select-experience.page';

describe('SelectExperiencePage', () => {
  let component: SelectExperiencePage;
  let fixture: ComponentFixture<SelectExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectExperiencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
