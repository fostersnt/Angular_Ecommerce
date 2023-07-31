import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // @Input()
  users: string = 'car';
  constructor(_userService: UserService){
    this.users = _userService.getUsers();
  }
}
