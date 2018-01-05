import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IssueService } from '../issue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any[];

  constructor(private route: ActivatedRoute,
              private issueService: IssueService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getComments(id).subscribe(result => {
        console.log(result);
        this.comments = result.results;
      },
      error => {
        console.log(<any>error);
      });
  }

}
