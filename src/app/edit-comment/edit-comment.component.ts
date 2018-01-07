import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {IssueService} from '../issue.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  @Input() users: any;
  @Input() issue: any;
  @Input() comment: any;

  constructor(private route: ActivatedRoute,
              private issueService: IssueService,
              private location: Location) { }

  ngOnInit() {
    this.getUsers();
    this.getIssue();
    this.getComment();
  }

  getIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getIssue(id).subscribe(issue => this.issue = issue);
    console.log(this.issue);
  }

  getComment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const idComment = +this.route.snapshot.paramMap.get('idComment');
    this.issueService.getComment(id, idComment).subscribe(comment => this.comment = comment);
    console.log(this.comment);
  }

  editComment(): void {
    if (this.comment.comment === '') {
      alert('The required fields is empty.');
    } else {
    const id = +this.route.snapshot.paramMap.get('id');
    const idComment = +this.route.snapshot.paramMap.get('idComment');
    this.issueService.updateComment(id, idComment, this.comment.comment)
      .subscribe(
        result => {
          alert('Comment updated successfully!');
          this.location.back();
          console.log('updateComment: ' + result.body + ' ' + result.code);
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
