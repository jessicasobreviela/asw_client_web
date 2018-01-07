import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {IssueService} from '../issue.service';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

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
  }

  createIssue(): void {
    if (this.title === '' || this.kind === '' || this.priority === '') console.log('Campos obligatorios vacíos');
    else {
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
            //alert(result.results);
            console.log('postIssue: ' + result.body + ' ' + result.code);
          },
          error => {
            alert(error.text());
            console.log(error.text());
          });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
