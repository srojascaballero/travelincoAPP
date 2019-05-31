import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionMusicalPage } from './inversion-musical.page';

describe('InversionMusicalPage', () => {
  let component: InversionMusicalPage;
  let fixture: ComponentFixture<InversionMusicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversionMusicalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InversionMusicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
