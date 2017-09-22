import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  private user: any = 
  {
    login: 'danielveiga',
    name: 'Daniel Veiga',
    followers: 3,
    following: 9,
    avatar_url: 'https://avatars2.githubusercontent.com/u/444202?v=4',
    email: 'daanielveiga@hotmail.com',
    bio: 'JavaScript Lead Developer @concretesolutions'
  };

  constructor() { }

  getUser(){
    return this.user;
  }

}
