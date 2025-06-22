//type alias
export type Callback = () => void;
export class Eventing {
  //to store type of event & related callbacks
  //we don't know the name of keys so we'd do it like that [key:string]
  events: { [key: string]: Callback[] } = {};

  //register an event that would trigger a callback function
  //function annotation
  on =(eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  //run all callback functions related to some event
  trigger = (eventName: string): void =>{
    const handlers = this.events[eventName] || [];
    for (let handler of handlers) {
      handler();
    }
  }
}
