import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUser } from '../models/user.model';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  currentUser: IUser;
    users: IUser[] = [];
 
    constructor(private userService: UsersService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { response => users; });
    }

}
