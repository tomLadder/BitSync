import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as electron from 'electron';

@Component({
  selector: 'choose-dialog',
  templateUrl: './app/shared/dialogs/choosedialog/choosedialog.dialog.html',
  styleUrls: ['./app/shared/dialogs/choosedialog/choosedialog.dialog.css']
})
export class ChooseDialog {

  private ready: bool = false;
  private isfile: bool = false;
  private paths: string[];


  constructor(public dialogRef: MatDialogRef<ChooseDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private cdRef:ChangeDetectorRef) {
  }

  private openDialogDirectory() {
    let dialog = electron.remote.dialog;
    let window:Electron.BrowserWindow = electron.remote.getCurrentWindow();
    dialog.showOpenDialog(window, {properties: ['openDirectory', 'multiSelections']}, (_paths: string[]) => {
      if(_paths !== undefined) {
        this.paths = _paths;
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
        this.paths = _paths;
        this.isfile = true;
        this.ready = true;
        this.cdRef.detectChanges();
      }
    });
  }

  finish() {
    this.dialogRef.close({isfile: this.isfile, paths: this.paths});
  }
}