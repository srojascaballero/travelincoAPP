import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosDiezPueblosPage } from './los-diez-pueblos.page';

describe('LosDiezPueblosPage', () => {
  let component: LosDiezPueblosPage;
  let fixture: ComponentFixture<LosDiezPueblosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosDiezPueblosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosDiezPueblosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
