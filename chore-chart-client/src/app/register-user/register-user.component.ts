import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  add( firstName: string, lastName: string, email: string,
    userName: string, passWord: string): void {
      let addedUser = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        userName: userName.trim(),
        passWord: passWord.trim(),
      }

      if (!firstName) { return; }
      this.userService.addUser(addedUser)
        .subscribe(user => { });
      }
}
