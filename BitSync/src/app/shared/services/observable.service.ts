import { IErrorCallback } from './observable.service';
import { Observable } from './../data/observable';
import { Injectable } from "@angular/core";
import * as fs from 'fs';

export interface IResultCallback { ( result: Observable[] ) : void; }
export interface IErrorCallback { (error: any): void; }

@Injectable()
export class ObservableService {

  saveObservables(observables: Observable[], errCallback: Function): void {
    try {
      fs.writeFileSync('data.json', JSON.stringify(observables), 'utf-8');
    } catch(e) {
      console.log('Error: ' + e)
      errCallback(e);
    }
  }

  readObservables(rescallback: IResultCallback, errCallback: IErrorCallback) {
    try {
      let obj = JSON.parse(fs.readFileSync('data.json').toString());
      let result: Observable[] = new Array();

      for(let i=0;i<obj.length;i++) {
        result.push(new Observable(obj[i].path, obj[i].destination, obj[i].type));
      }

      rescallback(result);
    } catch(e) {
      console.log('Error: ' + e);
      errCallback(e);
    }
  }
}

export var OBSERVABLE_PROVIDERS: Array<any> = [
  { provide: ObservableService, useClass: ObservableService }
];