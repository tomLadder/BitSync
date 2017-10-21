import { IconHelper } from './../../shared/util/iconhelper';
import { Observable } from './../../shared/data/observable';
import { Component, OnInit, Input } from '@angular/core';
var path = require('path');

@Component({
  selector: 'app-observable',
  templateUrl: './app/main/observable/observable.component.html',
  styleUrls: ['./app/main/observable/observable.component.css']
})

export class ObservableComponent implements OnInit {

  @Input() observable: Observable;
  private short_path:string;
  private icon_path:string

  constructor() {}

  ngOnInit(): void {
    this.short_path = path.basename(this.observable.Path);
    this.icon_path = "assets://img/svg icons/" + IconHelper.getIcon(this.observable.Path);
  }
}