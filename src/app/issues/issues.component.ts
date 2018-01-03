import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issues: any[];

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues().subscribe(result => {
      console.log(result);
        this.issues = result.results;
    },
     error => {
        console.log(<any>error);
      });
  }
}
