import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './app/status/status.component.html',
  styleUrls: ['./app/status/status.component.css']
})

export class StatusComponent implements OnInit {
  private day: number;
  private month: string;
  private year: number;
  private time: string;

  private cntFile: number;
  private cntDir: number;

  ngOnInit(): void {
    this.updateStatus();
  }

  updateStatus(): void {
    let date: Date = new Date();

    this.day = date.getDay() + 1;
    this.month = date.toLocaleString("de-DE", {month: "long"});
    this.year = date.getFullYear();

    this.time = date.toLocaleTimeString("de-DE");
  }

  updateWatchCount(numFilePaths: number, numDirPaths: number): void {
    this.cntFile = numFilePaths;
    this.cntDir = numDirPaths;
  }
}