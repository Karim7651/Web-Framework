// Optional interface
// It can have a name
// It can have an age
// if it does have both that's totally okay
//it it doesn't have any that's okay aswell
interface UserProps {
  name?: string;
  age?: number;
}

//type alias
type Callback = () => void;

export class User {
  //to store type of event & related callbacks
  //we don't know the name of keys so we'd do it like that [key:string]
  events: { [key: string]: Callback[] } = {};
  //object structure => better to use interface than inline
  // constructor(private data:{name:string;age:number}){
  // }
  constructor(private data: UserProps) {}
  get(propName: string): string | number {
    return this.data[propName];
  }
  set(update: UserProps): void {
    //copies update object to this.data object
    Object.assign(this.data, update);
  }
  //register an event that would trigger a callback function
  //function annotation
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  //run all callback functions related to some event
  trigger(eventName:string):void{
    const handlers = this.events[eventName] || [];
    for(let handler of handlers){
        handler();
    }
  }
}
