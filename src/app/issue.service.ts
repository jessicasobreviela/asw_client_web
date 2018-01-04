import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class IssueService {

  public apiUrl = 'https://asw-api.herokuapp.com/v1';

  constructor(public http: HttpClient) {
  }

  getIssues(): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': 'Token de280f7acdd671459c384958bade707042e231e1'}
    );
    return this.http.request('GET', this.apiUrl + '/issues', {headers: headers});
    // return this.http.get(this.apiUrl + 'issues');
  }

  getIssue(id: string): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': 'Token de280f7acdd671459c384958bade707042e231e1'}
    );
    return this.http.request('GET', this.apiUrl + '/issues/' + id, {headers: headers});
    // return this.http.get(this.apiUrl + 'issues');
  }

  /*addIssue(issue: Issue): Observable<any> {
    let json = JSON.stringify(issue);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'issues', params, {headers: headers});
  }*/
}
