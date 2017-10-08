import { ObservableType } from "./observabletype.enum";

export class Observable {
  private type: ObservableType;
  private path: string;

  constructor(_path: string, _type: ObservableType) {
    this.path = _path;
    this.type = _type;
  }

  get Path() {
    return this.path;
  }

  get Type() {
    return this.type;
  }
}