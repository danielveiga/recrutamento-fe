import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { UsersService } from './../../users.service';

@Component({
  selector: 'app-user-repositories-details',
  templateUrl: './user-repositories-details.component.html',
  styleUrls: ['./user-repositories-details.component.css']
})
export class UserRepositoriesDetailsComponent implements OnInit {

  public loading = false;
  username;
  repositoryName;
  inscription: Subscription;
  repository: any;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit() {
    this.loading = true;
    this.username = this.usersService.getUsername();
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        this.repositoryName = params['name'];
        this.getRepositoryByUsernameAndName();
      }
    );
  }

  getRepositoryByUsernameAndName() {
    const promiseUser = this.usersService.getRepositoryByUsernameAndName(this.username, this.repositoryName);
    promiseUser.then(
      res => {
        this.repository = res;
        this.loading = false;
      }
    );
  }

}
