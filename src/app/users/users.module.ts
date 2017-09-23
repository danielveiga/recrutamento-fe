import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
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
    HttpModule,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.rotatingPlane,
        backdropBackgroundColour: 'rgba(0,0,0,0.2)', 
        backdropBorderRadius: '4px',
        primaryColour: '#3377ff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff',
        fullScreenBackdrop: true
    })
  ],
  exports: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule { }
