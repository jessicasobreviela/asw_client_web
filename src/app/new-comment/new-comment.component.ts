import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IssueService } from '../issue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  comment = '';

  constructor(private route: ActivatedRoute,
              private issueService: IssueService,
              private location: Location) { }

  ngOnInit() {
  }

  createComment(): void {
    if (this.comment === '') alert('The required field is empty.');
    else {
      const id = +this.route.snapshot.paramMap.get('id');
      this.issueService.postComment(id, this.comment).subscribe(
        result => {
          alert('Comment created successfully!');
          this.location.back();
          console.log('postComment: ' + result.body + ' ' + result.code);
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
