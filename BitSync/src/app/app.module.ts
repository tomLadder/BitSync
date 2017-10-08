import { OBSERVABLE_PROVIDERS } from './shared/services/observable.service';
import { ObservableComponent } from './main/observable/observable.component';
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
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatDialogModule, MatSnackBarModule, MatChipsModule, MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  imports: [routing,BrowserModule,BrowserAnimationsModule,NoopAnimationsModule,MatButtonModule,MatCheckboxModule,MatCardModule,MatCardModule,MatDialogModule,MatSnackBarModule,MatChipsModule,MatProgressSpinnerModule],
  declarations: [AppComponent, MainComponent, StatusComponent, ChooseDialog, ObservableComponent],
  entryComponents: [ChooseDialog],
  bootstrap: [AppComponent],
  providers:[{provide: APP_BASE_HREF, useValue : '/' }, OBSERVABLE_PROVIDERS]
})
export class AppModule { }