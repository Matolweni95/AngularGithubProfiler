import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { GistsComponent } from './gists/gists.component';
import { FollowingComponent } from './following/following.component';
import { FollowersComponent } from './followers/followers.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepodetailsComponent } from './repodetails/repodetails.component';  

const routes: Routes = [
  {path: '', component: UsersComponent },
  {path: ':username', component: UserDetailsComponent },
  {path: ':username/followers', component: FollowersComponent },
  {path: ':username/gists', component:GistsComponent },
  {path: ':username/repos', component:ReposComponent },
  {path: ':username/following', component: FollowingComponent },
  {path: ':username/:repo', component: RepodetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
