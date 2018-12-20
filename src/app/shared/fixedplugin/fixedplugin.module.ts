import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedpluginComponent } from './fixedplugin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FixedpluginComponent],
  exports: [FixedpluginComponent]
})
export class FixedpluginModule { }
