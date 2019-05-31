import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertoIntimoPage } from './concierto-intimo.page';

describe('ConciertoIntimoPage', () => {
  let component: ConciertoIntimoPage;
  let fixture: ComponentFixture<ConciertoIntimoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciertoIntimoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciertoIntimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
