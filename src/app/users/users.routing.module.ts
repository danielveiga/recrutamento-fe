import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';
import { UsersComponent } from './users.component';
import { UserRepositoriesDetailsComponent } from './user-repositories/user-repositories-details/user-repositories-details.component';

const usersRoutes: Routes = [
    { path: 'user/:username', component: UsersComponent, children: [
        { path: 'repos', component: UserRepositoriesComponent, children:[
            { path: ':name', component: UserRepositoriesDetailsComponent }
        ]}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(usersRoutes)],
    exports: [RouterModule]
})

export class UsersRoutingModule {}
