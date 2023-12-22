import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  TextLoaderCounterWrapperComponent } from './loader-counter-wrapper/loader-counter-wrapper.component';
import {FileLoaderComponent  } from './file-loader/file-loader.component';import { TextLoaderRoutingModule } from './text-loader-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { WordCountComponent } from './word-count/word-count.component';

@NgModule({
  declarations: [
    TextLoaderCounterWrapperComponent,
    FileLoaderComponent,
    WordCountComponent,
  ],
  imports: [
    CommonModule,
    TextLoaderRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class TextLoaderModule { }
