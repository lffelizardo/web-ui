import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  private users: IUser[] = [];

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.usersService.getAll()
      .subscribe(data => this.users = data);
  }

  deleteUser(user){
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.usersService.delete(user.id)
        .subscribe(data => this.router.navigate(['users']),
          err => {
            alert("Could not delete user.");
            // Revert the view back to its original state
            this.users.splice(index, 0, user);
          });
    }
  }

}
