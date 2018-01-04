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
  selectedIssueId: string;
  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.getIssues();
  }
  onSelect(id: string): void {
    console.log(id);
    this.selectedIssueId = id;
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
