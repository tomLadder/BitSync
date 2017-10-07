import { ChooseDialog } from './../shared/dialogs/choosedialog/choosedialog.dialog';
import { MatDialog } from '@angular/material';
import { StatusComponent } from './../status/status.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app/main/main.component.html',
  styleUrls: ['./app/main/main.component.css']
})

export class MainComponent implements OnInit {
  @ViewChild('status') status: StatusComponent;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ChooseDialog, {
      width: '400px',
      height: '200px'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if(result) {
        
      }
      console.log(JSON.stringify(result));
    });
  }

  addObservable(): void {
    this.status.updateStatus();
    this.openDialog();
  }
}