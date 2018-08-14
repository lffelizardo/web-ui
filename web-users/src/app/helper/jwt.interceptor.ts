import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../services/storage.service';
 
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private storage: StorageService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.storage.getLocalUser();
        let requestToAPI = request.url.substring(0, 26);
        console.log('Em jwtInterceptor');
        console.log(requestToAPI);
        console.log(currentUser);
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
 
        return next.handle(request);
    }
}