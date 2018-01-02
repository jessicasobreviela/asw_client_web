import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  private apiUrl = 'https://asw-api.herokuapp.com/#!/v1/issues';
  data: any = {};

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getIssues();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }

  getIssues() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
