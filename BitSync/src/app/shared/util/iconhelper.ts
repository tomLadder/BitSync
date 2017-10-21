var path = require('path');
var extensions = require('./index.json');
var unknown = extensions[''];

export class IconHelper {
  private static isString(value: string) {
    return (typeof value === 'string') ||
      (Object.prototype.toString.call(value) === '[object String]');
  }

  public static getIcon(filename: string): string {
    var ext = IconHelper.isString(filename) ? path.extname(filename).toLowerCase() : '';

    return (extensions[ext] || unknown) + '.svg';
  }
}