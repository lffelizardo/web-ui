import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AlertService } from '../services/alert.service';
import { IUser } from '../models/user.model';
 
 
@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model: IUser = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UsersService,
        private alertService: AlertService) { }
 
    register() {
        console.log('registrando');
        this.loading = true;
        console.log(this.model);
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}