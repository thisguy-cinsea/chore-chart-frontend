import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[]=[
      {
        id: "1",
        firstName:"Will",
        lastName:"Ancona",
        emailAddress:"w.ancona@gmail.com",
        userName:"w.ancona",
        passWord:"password123"
      }
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // alert("yo are you working")
    this.getUsers();
  }

  getUsers(): void {
    // alert("get users is working")
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.users.forEach( user => users.push(user));
      });
  }

  add(id: string, firstName: string, lastName: string, emailAddress: string, 
    userName: string, passWord: string): void {
      id = id.trim();
      firstName = firstName.trim();
      lastName = lastName.trim();
      emailAddress = emailAddress.trim();
      userName = userName.trim();
      passWord = passWord.trim();
      if (!firstName) { return; }
      this.userService.addUser({id, firstName, lastName, emailAddress,
        userName, passWord } as User)
        .subscribe(user => { this.users.push(user);
      });
    }
  
  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
  }

}
