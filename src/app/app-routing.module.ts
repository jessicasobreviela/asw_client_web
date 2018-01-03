import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'issues', component: IssuesComponent },
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
