import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { IssueService } from './issue.service';
import { CommentsComponent } from './comments/comments.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueDetailComponent,
    UserComponent,
    StartPageComponent,
    CommentsComponent,
    NewIssueComponent,
    NewCommentComponent,
    EditIssueComponent,
    EditCommentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([
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

    ]),
  ],
  providers: [IssueService],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})

export class AppModule { }
