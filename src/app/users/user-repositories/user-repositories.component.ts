import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from './../users.service';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})
export class UserRepositoriesComponent implements OnInit {

  public loading = false;
  username;
  repositories: any[];
  isClicked: boolean = false;
  nameClicked;
  reverse: boolean = false;
  sortKey = 'full_name';
  page: number = 1;

  constructor(
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.username = this.usersService.getUsername();
    this.getUserRepositories('name', this.reverse, this.page);
  }

  sort(param) {
    this.sortKey = param;
    this.reverse = !this.reverse; 
    this.getUserRepositories(param, this.reverse, this.page);
  }

  nextPage() {
    if(this.repositories.length==10){
      this.page = this.page+1;
      this.getUserRepositories(this.sortKey, this.reverse, this.page)
    }
  }

  previousPage() {
    if(this.page>1){
      this.page--;
      this.getUserRepositories(this.sortKey, this.reverse, this.page)
    }
  }

  getUserRepositories(param, reverse, page) {
    this.loading = true;
    this.page = page;
    let direction = 'asc';
    if(reverse) {
      direction = 'desc';
    }
    const promiseUser = this.usersService.getUserRepositories(this.username, param, direction, page);
    promiseUser.then(
      res => {
        this.repositories = res;
        this.loading = false;
      }
    );
  }
}
