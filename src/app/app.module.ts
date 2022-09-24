import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposComponent } from './repos/repos.component';
import { GistsComponent } from './gists/gists.component';
import { FollowingComponent } from './following/following.component';
import { FollowersComponent } from './followers/followers.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RepodetailsComponent } from './repodetails/repodetails.component';  

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    GistsComponent,
    FollowingComponent,
    FollowersComponent,
    UsersComponent,
    UserDetailsComponent,
    RepodetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
