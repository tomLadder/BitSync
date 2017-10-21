import { Observable } from './../../data/observable';
import { ObservableType } from '../../data/observabletype.enum';
import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as electron from 'electron';

@Component({
  selector: 'choose-dialog',
  templateUrl: './app/shared/dialogs/choosedialog/choosedialog.dialog.html',
  styleUrls: ['./app/shared/dialogs/choosedialog/choosedialog.dialog.css']
})
export class ChooseDialog {

  private ready = false;
  private isfile = false;
  private observables: Observable[] = new Array();
  private destinationPath: string = "";


  constructor(public dialogRef: MatDialogRef<ChooseDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private cdRef:ChangeDetectorRef) {
    this.ready = false;
    this.isfile = false;
    this.observables = new Array();
  }

  private openDialogDirectory() {
    let dialog = electron.remote.dialog;
    let window:Electron.BrowserWindow = electron.remote.getCurrentWindow();
    dialog.showOpenDialog(window, {properties: ['openDirectory', 'multiSelections']}, (_paths: string[]) => {
      if(_paths !== undefined) {
        _paths.forEach((path) => {
          this.observables.push(new Observable(path, this.destinationPath, ObservableType.DIRECTORY));
        });

        this.isfile = false;
        this.ready = true;
        this.cdRef.detectChanges();
      }
    });
  }

  private openDialogFile() {
    let dialog = electron.remote.dialog;
    let window:Electron.BrowserWindow = electron.remote.getCurrentWindow();
    dialog.showOpenDialog(window, {properties: ['openFile', 'multiSelections']}, (_paths: string[]) => {
      if(_paths !== undefined) {
        _paths.forEach((path) => {
          this.observables.push(new Observable(path,this.destinationPath, ObservableType.FILE));
        });

        this.isfile = true;
        this.ready = true;
        this.cdRef.detectChanges();
      }
    });
  }

  finish() {
    console.log('finish :)');
    this.dialogRef.close(this.observables);
  }

  private openDestinationDialogDirectory() {
    let dialog = electron.remote.dialog;
    let window:Electron.BrowserWindow = electron.remote.getCurrentWindow();
    dialog.showOpenDialog(window, {properties: ['openDirectory']}, (_paths: string[]) => {
      if(_paths !== undefined) {
        this.destinationPath = _paths[0];
        this.cdRef.detectChanges();
      }
    });
  }

  setDestination() {
    this.openDestinationDialogDirectory();
  }
}