import { ChooseDialog } from './shared/dialogs/choosedialog/choosedialog.dialog';
import { StatusComponent } from './status/status.component';
import { MainComponent } from './main/main.component';
import 'hammerjs';
import { routing } from './app.routing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatDialogModule } from '@angular/material';


@NgModule({
  imports: [routing,BrowserModule,BrowserAnimationsModule,NoopAnimationsModule,MatButtonModule,MatCheckboxModule,MatCardModule,MatCardModule,MatDialogModule],
  declarations: [AppComponent, MainComponent, StatusComponent, ChooseDialog],
  entryComponents: [ChooseDialog],
  bootstrap: [AppComponent],
  providers:[{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }