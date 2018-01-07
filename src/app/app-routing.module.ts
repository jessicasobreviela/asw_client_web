import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'issues/new', component: NewIssueComponent},
  { path: 'issues/:id/edit', component: EditIssueComponent},
  { path: 'issues/:id/comments', component: CommentsComponent },
  { path: 'issues/:id/comments/:idComment/edit', component: EditCommentComponent },
  { path: 'issues/:id/comments/new', component: NewCommentComponent },
  { path: 'issues/:id', component: IssueDetailComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'users/:user', component: UserComponent },
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
