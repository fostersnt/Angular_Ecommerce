import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce';

  constructor(private data: UserService){
    this.data.getUsers().subscribe(abc => {
      console.warn(abc);
    });
  }
}
