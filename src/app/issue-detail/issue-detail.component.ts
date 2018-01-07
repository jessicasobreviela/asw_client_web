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

  deleteIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.deleteIssue(id).subscribe(
      result => {
        alert('Issue deleted successfully!');
        //this.location.go('/issues');
        this.location.back();
        //alert(result.results);
        console.log('deleteIssue: ' + result.body + ' ' + result.code);
      },
      error => {
        //alert(error.text());
        alert('You do not have authorization to delete this issue')
        console.log(error.text());
      });
  }

  deleteComment(idComment): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.deleteComment(id, idComment).subscribe(
      result => {
        alert('Comment deleted successfully!');
        this.location.back();
        //alert(result.results);
        console.log('deleteComment: ' + result.body + ' ' + result.code);
      },
      error => {
        //alert(error.text());
        alert('You do not have authorization to delete this comment')
        console.log(error.text());
      });
  }

  goBack(): void {
    this.location.back();
  }

}
