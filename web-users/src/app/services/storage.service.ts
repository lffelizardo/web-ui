import { IUser } from "../models/user.model";
import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage.keys.config";

@Injectable()
export class StorageService {

    getLocalUser(): IUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser)
        if(usr === null){
            return null;
        }else{
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj: IUser){
        console.log('Em localUser');
        console.log(obj);
        if(obj === null){
            localStorage.removeItem(STORAGE_KEYS.localUser)
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj));
        }
    }
}