import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {IssueService} from '../issue.service';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {
  @Input() users: any;
  title = '';
  kind = '';
  priority = '';
  assignee = null;
  description = '';
  status = 'New';

  constructor(private issueService: IssueService,
              private location: Location) {
  }

  ngOnInit() {
    this.getUsers();
  }

  createIssue(): void {
    if (this.title === '' || this.kind === '' || this.priority === '') {
      alert('One or more of required fields is empty.');
    } else {
      this.issueService.postIssue(this.title,
        this.priority,
        this.assignee,
        this.kind,
        this.status,
        this.description)
        .subscribe(
          result => {
            alert('Issue created successfully!');
            this.location.go('/issues'); // TODO: hacer que realmente vuelva a /issues (cambia la url pero no va..)
            console.log('postIssue: ' + result.body + ' ' + result.code);
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
