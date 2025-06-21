import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

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
const rootUrl = 'http://localhost:3000';
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes :Attributes<UserProps>;

  constructor(attrs : UserProps){
    this.attributes = new Attributes<UserProps>(attrs)
  }
  
}
