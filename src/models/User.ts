import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { Callback } from './Eventing';
import { AxiosResponse } from 'axios';
// Optional interface
// It can have a name
// It can have an age
// if it does have both that's totally okay
//it it doesn't have any that's okay aswell
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = 'http://localhost:3000/users';
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  //not good
  // on(evenName:string,callback:Callback):void{
  //   this.events.on(evenName,callback)
  // }

  //to call
  //user.on(eventName,()=>{})
  get on() {
    //not a call but a reference to the function
    return this.events.on;
  }

  get trigger() {
    //not a call but a reference to the function
    return this.events.trigger;
  }

  get get() {
    //not a call but a reference to the function
    return this.attributes.get;
  }
  set(update: UserProps): void {
    this.attributes.set(update);
    //trigger user change events
    this.events.trigger('change');
  }
  fetch(): void {
    const id = this.attributes.get('id');
    //no id no fetch
    if (id) {
      this.sync.fetch(id).then((response: AxiosResponse) => {
        //not just set because we want to trigger a userChange event in this class
        //the other one in Attributes doesn't trigger a change
        this.set(response.data);
      });
    } else {
      throw new Error('Cannot fetch without an id');
    }
  }
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
