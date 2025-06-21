import { User, UserProps } from './User';
export class Attributes<T> {
  constructor(private data: T) {}
  //like this we'd have to use type guards all the time or type assertion (as number)
  //   get(propName: string): string | number | boolean {
  //     return this.data[propName];
  //   }

  //VII
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    //copies update object to this.data object
    Object.assign(this.data, update);
  }
}