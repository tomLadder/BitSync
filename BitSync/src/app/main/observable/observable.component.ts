import { Observable } from './../../shared/data/observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './app/main/observable/observable.component.html',
  styleUrls: ['./app/main/observable/observable.component.css']
})

export class ObservableComponent implements OnInit {

  public @Input() observable: Observable;

  constructor() {}

  ngOnInit(): void {

  }
}