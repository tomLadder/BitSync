import { ObservableService } from './../shared/services/observable.service';
import { Observable } from './../shared/data/observable';
import { ChooseDialog } from './../shared/dialogs/choosedialog/choosedialog.dialog';
import { MatDialog, MatSnackBar } from '@angular/material';
import { StatusComponent } from './../status/status.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableType } from '../shared/data/observableType.enum';

@Component({
  selector: 'app-main',
  templateUrl: './app/main/main.component.html',
  styleUrls: ['./app/main/main.component.css']
})

export class MainComponent implements OnInit {
  @ViewChild('status') status: StatusComponent;
  private observables: Observable[] = new Array();

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private observableService: ObservableService) {}

  ngOnInit(): void {
    this.observableService.readObservables((result: Observable[]) => {
      this.observables = result;
      this.updateStatus();
    },
    (err: any) => {
      console.log(err);
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ChooseDialog, {
      width: '400px',
      height: '200px'
    });


    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.observables = this.observables.concat(result);

        this.observableService.saveObservables((this.observables), (err: any) => {
          console.log('Error: ' + err);
        });

        this.updateStatus();
      }
    });
  }

  addObservable(): void {
    this.openDialog();
  }

  updateStatus(): void {
    if(this.observables) {
      let cntFiles = this.observables.filter((value: Observable) => {return value.Type === ObservableType.FILE}).length;
      let cntDirs = this.observables.filter((value: Observable) => {return value.Type === ObservableType.DIRECTORY}).length;

      this.status.updateWatchCount(cntFiles, cntDirs);
    }
  }
}