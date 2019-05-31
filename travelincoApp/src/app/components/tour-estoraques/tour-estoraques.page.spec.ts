import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourEstoraquesPage } from './tour-estoraques.page';

describe('TourEstoraquesPage', () => {
  let component: TourEstoraquesPage;
  let fixture: ComponentFixture<TourEstoraquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourEstoraquesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourEstoraquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
