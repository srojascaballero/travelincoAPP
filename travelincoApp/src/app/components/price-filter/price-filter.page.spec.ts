import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFilterPage } from './price-filter.page';

describe('PriceFilterPage', () => {
  let component: PriceFilterPage;
  let fixture: ComponentFixture<PriceFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
