import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public loading = false;
  username: string;
  inscription: Subscription;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private usersService: UsersService) { 
  }

  ngOnInit() {
    
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        this.loading = true;
        this.username = params['username'];
        if(!this.username){
          this.loading = false;
        } else {
          this.getUser();
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscription.unsubscribe();
  }

  getUser(){
    let promiseUser = this.usersService.getUser(this.username);
    promiseUser.then(
      res => {
        this.user = res;
        this.loading = false;
      }
    )
    .catch(res => {
      this.user = undefined;
      this.router.navigate(['/notfound']);
      this.loading = false;
    })
  }

}
