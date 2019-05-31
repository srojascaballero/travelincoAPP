import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfPage } from './surf.page';

describe('SurfPage', () => {
  let component: SurfPage;
  let fixture: ComponentFixture<SurfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
