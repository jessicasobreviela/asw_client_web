import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/

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

  getIssue(id: number): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': 'Token de280f7acdd671459c384958bade707042e231e1'}
    );
    return this.http.request('GET', this.apiUrl + '/issues/' + id, {headers: headers});
    // return this.http.get(this.apiUrl + 'issues');
  }

  getComments(id: number): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': 'Token de280f7acdd671459c384958bade707042e231e1'}
    );
    return this.http.request('GET', this.apiUrl + '/issues/' + id + /comments/, {headers: headers});
  }

  getComment(id: number, idComment: number): Observable<any> {
    const headers = new HttpHeaders(
      {'Authorization': 'Token de280f7acdd671459c384958bade707042e231e1'}
    );
    return this.http.request('GET', this.apiUrl + '/issues/' + id + /comments/ + idComment, {headers: headers});
  }

  /** PUT: update the hero on the server */
  /*updateIssue (issue: Issue): Observable<any> {
    return this.http.put(this.apiUrl + '/issues', issue, httpOptions).pipe(
      tap(_ => this.log(`updated issue id=${issue.id}`)),
      catchError(this.handleError<any>('updateIssue'))
    );
  }*/

  /** POST: add a new hero to the server */
  /*addIssue (issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.apiUrl + '/issues', issue, httpOptions).pipe(
      tap((issue: Issue) => this.log(`added issue w/ id=${issue.id}`)),
      catchError(this.handleError<Issue>('addIssue'))
    );
  }*/

  /** DELETE: delete the hero from the server */
  /*deleteIssue (issue: Issue | number): Observable<Issue> {
    const id = typeof issue === 'number' ? issue : issue.id;
    const url = `${this.apiUrl + '/issues'}/${id}`;

    return this.http.delete<Issue>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted issue id=${id}`)),
      catchError(this.handleError<Issue>('deleteIssue'))
    );
  }*/

  /*addIssue(issue: Issue): Observable<any> {
    let json = JSON.stringify(issue);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'issues', params, {headers: headers});
  }*/
}
