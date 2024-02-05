import { Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
];
