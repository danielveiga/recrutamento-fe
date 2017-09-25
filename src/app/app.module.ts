import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersService } from './users/users.service';
import { LoadingModule }  from 'ngx-loading';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
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
