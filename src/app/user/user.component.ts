import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {IssueService} from '../issue.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any;

  constructor(private route: ActivatedRoute,
              private issueService: IssueService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const username = +this.route.snapshot.paramMap.get('user');  // TODO: Coge el user como si fuera un numero
    console.log(username);
    this.issueService.getUser(username.toString()).subscribe(user => this.user = user);
    console.log(this.user);
  }

}
