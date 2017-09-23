import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UserNotFoundComponent } from './users/user-not-found/user-not-found.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    
    //{ path: 'user', component: AppComponent },
    //{ path: 'user/:username', component: UsersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}