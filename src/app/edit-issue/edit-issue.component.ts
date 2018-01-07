import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IssueService } from '../issue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {

  @Input() users: any;
  @Input() issue: any;

  constructor(private route: ActivatedRoute,
              private issueService: IssueService,
              private location: Location) {}

  ngOnInit() {
    this.getUsers();
    this.getIssue();
  }

  getIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getIssue(id).subscribe(issue => this.issue = issue);
    console.log(this.issue);
  }

  editIssue(): void {
    if (this.issue.title === '' || this.issue.kind === '' || this.issue.priority === '') {
      alert('One or more of required fields is empty.');
    } else {
        const id = +this.route.snapshot.paramMap.get('id');
        this.issueService.updateIssue(id, this.issue.title,
        this.issue.priority,
        this.issue.assignee,
        this.issue.kind,
        this.issue.status,
        this.issue.description)
        .subscribe(
          result => {
            alert('Issue updated successfully!');
            this.location.back();
            console.log('updateIssue: ' + result.body + ' ' + result.code);
          },
          error => {
            alert(error.text());
          });
    }
  }

  getUsers(): void {
    this.issueService.getUsers().subscribe(result => {
        this.users = result.results;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
