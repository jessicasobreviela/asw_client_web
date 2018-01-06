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
import { NewIssueComponent } from './new-issue/new-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueDetailComponent,
    UserComponent,
    StartPageComponent,
    NewIssueComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})

export class AppModule { }
