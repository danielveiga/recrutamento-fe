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

  public loading = false;
  username;
  repositories: any[];
  isClicked: boolean = false;
  nameClicked;

  constructor(
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.username = this.usersService.getUsername();
    this.getUserRepositories();
  }

  getUserRepositories() {
    this.loading = true;
    const promiseUser = this.usersService.getUserRepositories(this.username);
    promiseUser.then(
      res => {
        this.repositories = res;
        this.loading = false;
      }
    );
  }

  openDetails(repoName) {
    this.router.navigate(['/user', this.username, 'repos', repoName]);
    this.nameClicked = repoName;
  }

  closeDetails() {
    this.router.navigate(['/user', this.username, 'repos']);
    this.nameClicked = undefined;
  }

}
