import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  apiUrl = 'https://api.github.com/';
  private username;

  constructor(private http: Http) { }

  private extractData(res: Response) {
        const body = res.json();
        return body;
    }

    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

    getUser(username) {
      this.username = username;
        return this.http.get(this.apiUrl + 'users/' + username).toPromise()
                .then(this.extractData)
                .catch(this.handleErrorPromise);
    }

    getUserRepositories(username, param, direction= 'asc', page, perPage= 10) {
        return this.http.get(this.apiUrl + 'users/' + username + '/repos',
            {params:
                {
                    sort: param,
                    direction: direction,
                    page: page,
                    per_page: perPage
                }
            }).toPromise()
                .then(this.extractData)
                .catch(this.handleErrorPromise);
    }

    getRepositoryByUsernameAndName(username, repositoryName) {
        return this.http.get(this.apiUrl + 'repos/' + username + '/' + repositoryName).toPromise()
                .then(this.extractData)
                .catch(this.handleErrorPromise);
    }

    getUsername() {
      return this.username;
    }

}
