import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiominasPage } from './niominas.page';

describe('NiominasPage', () => {
  let component: NiominasPage;
  let fixture: ComponentFixture<NiominasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiominasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiominasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
