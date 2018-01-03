import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueDetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
