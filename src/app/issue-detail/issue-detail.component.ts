import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IssueService} from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  @Input() issueId: string;
  issue: any;
  constructor(private issueService: IssueService) {}

  ngOnInit() {this.getIssue(); }

  getIssue(): any {
    this.issue = this.issueService.getIssue(this.issueId);
    console.log(this.issueId);
  }

  /*getIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }*/

}
