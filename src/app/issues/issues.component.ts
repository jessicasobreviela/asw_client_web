import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  private apiUrl = 'https://asw-api.herokuapp.com/v1/';

  constructor() {
  }

  ngOnInit() {}

  /*getIssues(): Observable<any> {
    return this.http.get(this.apiUrl + 'issues');
  }

  addIssue(issue: Issue): Observable<any> {
    let json = JSON.stringify(issue);

    //El backend recogerá un parametro json
    let params = "json="+json;

    //Establecemos cabeceras
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'issues', params, {headers: headers});
  }*/
}
