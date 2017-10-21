import { ObservableType } from "./observabletype.enum";

export class Observable {
  private type: ObservableType;
  private path: string;
  private destination: string;

  constructor(_path: string, _destination: string, _type: ObservableType) {
    this.path = _path;
    this.type = _type;
    this.destination = _destination;
  }

  get Path() {
    return this.path;
  }

  get Destination() {
    return this.destination;
  }

  get Type() {
    return this.type;
  }
}