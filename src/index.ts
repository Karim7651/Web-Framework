import { User } from './models/User';
import { UserForm } from './Views/UserForm';
const root = document.getElementById('root') as HTMLElement;
if (root) {
  const userForm = new UserForm(
    root,
    User.buildUser({ name: 'NAME', age: 20,id:1 })
  );
  userForm.render();
}else{
    throw new Error('root element not found')
}
