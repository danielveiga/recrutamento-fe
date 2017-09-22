import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from './../users.service';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})
export class UserRepositoriesComponent implements OnInit {

  username;
  repositories: any[];

  constructor(
    private usersService: UsersService) { }

  ngOnInit() {
    this.username = this.usersService.getUsername();
    this.getUserRepositories();
      
  }

  getUserRepositories(){
    let promiseUser = this.usersService.getUserRepositories(this.username);
    promiseUser.then(
      res => this.repositories = res
    )
  }

}
