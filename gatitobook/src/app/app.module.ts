import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { App } from './app';

@NgModule({
  declarations: [App],
  imports: [CommonModule, BrowserModule, RouterModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
