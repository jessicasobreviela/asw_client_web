import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import {NewIssueComponent} from './new-issue/new-issue.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'issues/new', component: NewIssueComponent},
  { path: 'issues/:id/comments', component: CommentsComponent },
  { path: 'issues/:id', component: IssueDetailComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'users/:user', component: UserComponent },
  { path: 'detail/:id', component: IssueDetailComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
