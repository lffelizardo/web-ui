import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.model';
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) { }

    create(user: IUser) {
        return this.http.post(`${API_CONFIG.resourceAccountURL}/user/newuser`, user);
    }

    getAll() {
        return this.http.get<IUser[]>(`${API_CONFIG.resourceAccountURL}/user/users`);
    }

    getUser(id:string) {
        return this.http.get<IUser>(`${API_CONFIG.resourceAccountURL}/user/user/${id}`);
    }

    update(user: IUser) {
        const url = `${API_CONFIG.resourceAccountURL}/user/updateuser/${user.id}`;
        return this.http.put(url, user);
    }

    delete(id: number) {
        return this.http.delete(`${API_CONFIG.resourceAccountURL}/user/deleteuser/${id}`);
    }
}