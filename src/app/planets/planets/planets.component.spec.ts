import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MdSnackBar } from '@angular/material';

import { PlanetsComponent } from './planets.component';
import { DataService } from '../../core';
import * as testing from '../../../testing';

describe('PlanetsComponent', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsComponent ],
      providers: [
        { provide: DataService, useClass: testing.DataServiceStub },
        { provide: MdSnackBar, useClass: testing.MdSnackBarStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('before detectChanges', () => {
    it('should not have planets', () => {
      expect(component.planets).toBeUndefined();
    });
  });

  describe('after detectChanges', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should contain Planets heading', () => {
      de = fixture.debugElement.query(By.css('h2'));
      el = de.nativeElement;
      expect(el.textContent).toContain('Planets');
    });

    it('should have planets', () => {
      expect(component.planets.length).toBe(testing.planets.length);
    });
  });
});
