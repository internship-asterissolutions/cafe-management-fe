import { Routes } from '@angular/router';
import path from 'path';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';


export const routes: Routes = [
    {path:'',pathMatch:'full' ,redirectTo:'user'},
    {path:'user', component : UsersComponent },
    {path:'create_user', component : UserDetailsComponent },
    {path:'user/:id', component : UserDetailsComponent }
];
