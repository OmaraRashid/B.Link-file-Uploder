import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { TextLoaderCounterWrapperComponent } from './loader-counter-wrapper.component';

describe('TextLoaderCounterWrapperComponent', () => {
  let component: TextLoaderCounterWrapperComponent;
  let fixture;

  beforeEach(async () => {

    fixture = TestBed.createComponent(TextLoaderCounterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    expect(component.content).toBeDefined();
  });


});
