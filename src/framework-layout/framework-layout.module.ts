
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutHarnessComponent } from './layout-harness/layout-harness.component';
import { ContentCanvasComponent } from './content-canvas/content-canvas.component';

export const COMPONENTS = [
  LayoutHarnessComponent,
  ContentCanvasComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class FrameworkLayoutModule {}