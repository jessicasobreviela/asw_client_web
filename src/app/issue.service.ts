import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IssueService {

  public apiUrl = 'https://asw-api.herokuapp.com/v1/';

  constructor(public http: HttpClient) { }

  getIssues(): Observable<any> {
    return this.http.get(this.apiUrl + 'issues');
  }

  /*addIssue(issue: Issue): Observable<any> {
    let json = JSON.stringify(issue);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'issues', params, {headers: headers});
  }*/
}
