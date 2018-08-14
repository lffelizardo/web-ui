import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form/user-form.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'users', component: UsersComponent, pathMatch: 'full' },
    { path: 'users/new', component: UserFormComponent},
    { path: 'users/:id', component: UserFormComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);