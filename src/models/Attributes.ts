import { User, UserProps } from './User';
export class Attributes<T> {
  constructor(private data: T) {}
  //like this we'd have to use type guards all the time or type assertion (as number)
  //   get(propName: string): string | number | boolean {
  //     return this.data[propName];
  //   }

  // //VII
  // get<K extends keyof T>(key: K): T[K] {
  //   //like this if this gets called from user is is user.data[key] which is undefined
  //   return this.data[key];

  // }
  //setting this as an arrow function
  //with arrow function this is going to be bound to the instance of ATTRIBUTE NOT USER
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
  getAll(): T {
    return this.data;
  }
  set(update: T): void {
    //copies update object to this.data object
    Object.assign(this.data, update);
  }
}
