import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

// used to create fake backend
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { AlertComponent } from "./directives/alert.component";
import { AlertService } from "./services/alert.service";
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsersService } from './services/users.service';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form/user-form.component';
import { StorageService } from './services/storage.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        CadastroComponent,
        UsersComponent,
        UserFormComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UsersService,
        StorageService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }