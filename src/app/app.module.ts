import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersService } from './users/users.service';
import { LoadingModule }  from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    FormsModule,
    AppRoutingModule,
    LoadingModule
  ],
  //providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
