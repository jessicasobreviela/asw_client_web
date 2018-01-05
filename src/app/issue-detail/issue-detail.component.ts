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

  constructor(private route: ActivatedRoute,
              private issueService: IssueService,
              private location: Location) {}

  ngOnInit() {
    this.getIssue();
  }

  getIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getIssue(id).subscribe(issue => this.issue = issue);
    console.log(this.issue);
  }

  goBack(): void {
    this.location.back();
  }

  /*getComments(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getComments(id).subscribe(comments => this.comments = comments);
  }*/

}
