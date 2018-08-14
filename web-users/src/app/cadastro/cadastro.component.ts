import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from "../services/alert.service";
import { UsersService } from '../services/users.service';
import { IUser } from '../models/user.model';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'cadastro.component.html'
})
export class CadastroComponent implements OnInit {

    private model: IUser = {};


    constructor(
        private router: Router,
        private userService: UsersService,
        private alertService: AlertService) { }


    ngOnInit(): void {
    }

    cadastrar() {
        this.userService.create(this.model)
            .catch((error: any, caught: any) => {
                this.alertService.error('Erro ao comunicar com servidor');
                return [];
            })
            .subscribe(
                (data: any) => {
                    if (data.id) {
                        this.alertService.success('Usuário cadastrado com sucesso', true);
                    } else {
                        this.alertService.error('Erro ao cadastrar usuário');
                    }

                    this.limpar();
                });
    }

    limpar() {
        window.location.reload();
    }
}
