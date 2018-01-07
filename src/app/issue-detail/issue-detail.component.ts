import {Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IssueService } from '../issue.service';
import { IssuesComponent } from '../issues/issues.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  @Input () issue: any;
  selectedUsername: string;

  constructor(private route: ActivatedRoute,
              private issueService: IssueService,
              private location: Location) {}

  ngOnInit() {
    this.getIssue();
  }

  onSelect(username: string): void {
    console.log(username);
    this.selectedUsername = username;
  }

  getIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getIssue(id).subscribe(issue => this.issue = issue);
    console.log(this.issue);
  }

  goBack(): void {
    this.location.back();
  }

}
