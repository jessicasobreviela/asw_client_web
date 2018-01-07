import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {IssueService} from '../issue.service';
import {any} from 'codelyzer/util/function';

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
    const username = 'florenciarimolo';
    console.log(username);
    this.issueService.getUser(username.toString()).subscribe(user => this.user = user);
    /*this.user = {
      image_url: './assets/profile_image.jpg',
      first_name: 'FirstName',
      last_name: 'LastName',
      username: 'UserName'
    }*/
    console.log(this.user);
  }

}
