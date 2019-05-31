import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanonDelChicamochaPage } from './canon-del-chicamocha.page';

describe('CanonDelChicamochaPage', () => {
  let component: CanonDelChicamochaPage;
  let fixture: ComponentFixture<CanonDelChicamochaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanonDelChicamochaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanonDelChicamochaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
