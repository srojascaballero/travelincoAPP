import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElArteEnTuPielPage } from './el-arte-en-tu-piel.page';

describe('ElArteEnTuPielPage', () => {
  let component: ElArteEnTuPielPage;
  let fixture: ComponentFixture<ElArteEnTuPielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElArteEnTuPielPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElArteEnTuPielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
