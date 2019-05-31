import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamoOcetaPage } from './paramo-oceta.page';

describe('ParamoOcetaPage', () => {
  let component: ParamoOcetaPage;
  let fixture: ComponentFixture<ParamoOcetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamoOcetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamoOcetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
