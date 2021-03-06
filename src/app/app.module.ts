import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersService } from './users/users.service';
import { LoadingModule } from 'ngx-loading';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    FormsModule,
    AppRoutingModule,
    LoadingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
