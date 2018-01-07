import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { IssueService } from '../issue.service';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issues: any[];
  selectedIssueId: string;
  constructor(private issueService: IssueService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.getIssues();
  }

  onSelect(id: string): void {
    console.log(id);
    this.selectedIssueId = id;
  }

  getIssues(): void {
    let par_key = '';
    let par_value = '';
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        for (let key in params) {
          par_key = key;
          par_value= params[key];
        }
      });
    this.issueService.getIssues(par_key.toString(), par_value.toString()).subscribe(result => {
      console.log(result);
        this.issues = result.results;
    },
     error => {
        console.log(<any>error);
      });
  }
}
