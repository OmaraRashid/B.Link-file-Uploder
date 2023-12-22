import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  TextLoaderCounterWrapperComponent } from './loader-counter-wrapper/loader-counter-wrapper.component';

const routes: Routes = [
  { path: '', 
  component: TextLoaderCounterWrapperComponent,
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextLoaderRoutingModule { }
