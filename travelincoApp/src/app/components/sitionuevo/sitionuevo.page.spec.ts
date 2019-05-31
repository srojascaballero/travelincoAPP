import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitionuevoPage } from './sitionuevo.page';

describe('SitionuevoPage', () => {
  let component: SitionuevoPage;
  let fixture: ComponentFixture<SitionuevoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitionuevoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitionuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
