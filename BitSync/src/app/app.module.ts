import { routing } from './app.routing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdCardModule } from '@angular/material';


@NgModule({
  imports: [BrowserModule,BrowserAnimationsModule,NoopAnimationsModule,routing,MdButtonModule,MdCheckboxModule,MdCardModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers:[{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }