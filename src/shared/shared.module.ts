import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    NotFoundComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}