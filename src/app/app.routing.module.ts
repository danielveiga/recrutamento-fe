import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNotFoundComponent } from './users/user-not-found/user-not-found.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'notfound', component: UserNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
