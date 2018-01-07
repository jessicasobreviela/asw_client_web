import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/

@Injectable()
export class IssueService {

  public apiUrl = 'https://asw-api.herokuapp.com/v1';
  public token = 'Token de280f7acdd671459c384958bade707042e231e1';

  constructor(public http: HttpClient) {
  }

  getIssues(): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token}
    );
    return this.http.request('GET', this.apiUrl + '/issues', {headers: headers});
    // return this.http.get(this.apiUrl + 'issues');
  }

  getIssue(id: number): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token}
    );
    return this.http.request('GET', this.apiUrl + '/issues/' + id, {headers: headers});
    // return this.http.get(this.apiUrl + 'issues');
  }

  getComments(id: number): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token}
    );
    return this.http.request('GET', this.apiUrl + '/issues/' + id + /comments/, {headers: headers});
  }

  getComment(id: number, idComment: number): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token}
    );
    return this.http.request('GET', this.apiUrl + '/issues/' + id + /comments/ + idComment, {headers: headers});
  }

  getUser(username: string): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token}
    );
    return this.http.request('GET', this.apiUrl + '/users/' + username, {headers: headers});
  }

  getUsers(): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token}
    );
    return this.http.request('GET', this.apiUrl + '/users/', {headers: headers});
  }

  postIssue(title, priority, assignee, kind, status, description): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token}
    );

    const body = JSON.stringify({ title, description, kind, priority, status, assignee, });

    return this.http.post(this.apiUrl + '/issues/', body, {headers: headers});
    // return this.http.get(this.apiUrl + 'issues');
  }

  updateIssue(id, title, priority, assignee, kind, status, description): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token, 'Content-Type': 'application/json'}
    );

    const body = JSON.stringify({ title, description, kind, priority, status, assignee, });

    return this.http.put(this.apiUrl + '/issues/' + id, body, {headers: headers});
  }

  deleteIssue(id): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token, 'Content-Type': 'application/json'}
    );

    return this.http.delete(this.apiUrl + '/issues/' + id, {headers: headers});
  }

  postComment(id, comment): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token, 'Content-Type': 'application/json'}
    );

    const body = JSON.stringify({ comment, });

    return this.http.post(this.apiUrl + '/issues/' + id + '/comments/', body, {headers: headers});
  }

  deleteComment(id, idComment): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': this.token, 'Content-Type': 'application/json'}
    );

    return this.http.delete(this.apiUrl + '/issues/' + id + '/comments/' + idComment, {headers: headers});
  }

}
