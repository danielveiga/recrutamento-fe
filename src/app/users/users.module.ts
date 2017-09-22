import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { UsersComponent } from './users.component';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { UsersRoutingModule } from './users.routing.module';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';
import { UsersService } from './users.service';
import { UserRepositoriesDetailsComponent } from './user-repositories/user-repositories-details/user-repositories-details.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserNotFoundComponent,
    UserRepositoriesComponent,
    UserRepositoriesDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpModule
  ],
  exports: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule { }
