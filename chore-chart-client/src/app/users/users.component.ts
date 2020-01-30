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
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // alert("yo are you working")
    this.getUsers();
  }

  getUsers(): void {
    console.log("get users is working");
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }



  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    console.log(this.users);
    this.userService.deleteUser(user).subscribe();
  }

}
