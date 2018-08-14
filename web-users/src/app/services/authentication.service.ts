import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { JwtHelper } from 'angular2-jwt';
import { IUser } from '../models/user.model';
import { StorageService } from './storage.service';
import { API_CONFIG } from '../config/api.config';
 
@Injectable()
export class AuthenticationService {

    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http: HttpClient,
                private storage: StorageService) { }
 
    login(username: string, password: string) {
        return this.http.post(`${API_CONFIG.singleSignOnURL}/login`, { login: username, password: password },
        {
            observe: 'response',
            responseType: 'text'
        });
    }
 
    logout() {
        // remove user from local storage to log user out
        this.storage.setLocalUser(null);
    }

    successfulLogin(authorizationValue : string) {
        let token = this.jwtHelper.decodeToken(authorizationValue).sub;
        let val = token.split(";");
        let tok = authorizationValue.substring(7);
        console.log(tok);
        let user : IUser = {
            id      : val[0],            
            name   : val[1],
            login: val[2],
            email   : val[3],
            token : tok
        };
        this.storage.setLocalUser(user);
    }
}