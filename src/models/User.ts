// Optional interface
// It can have a name
// It can have an age
// if it does have both that's totally okay

import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Eventing } from './Eventing';
import { Model } from './Model';

//it it doesn't have any that's okay aswell
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootUrl,
      (json: UserProps) => User.buildUser(json)
    );
  }
  setRandomAge():void{
    const age = Math.round(Math.random()*100)
    this.set({age})
  }
}
