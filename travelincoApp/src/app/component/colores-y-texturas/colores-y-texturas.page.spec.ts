import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresYTexturasPage } from './colores-y-texturas.page';

describe('ColoresYTexturasPage', () => {
  let component: ColoresYTexturasPage;
  let fixture: ComponentFixture<ColoresYTexturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoresYTexturasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresYTexturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
