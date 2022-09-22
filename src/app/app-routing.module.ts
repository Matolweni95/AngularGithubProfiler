import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { GistsComponent } from './gists/gists.component';
import { FollowingComponent } from './following/following.component';
import { FollowersComponent } from './followers/followers.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: '', component: UsersComponent },
  {path: ':username', component: UserDetailsComponent },
  {path: ':username/followers', component: FollowersComponent },
  {path: ':username/gists', component:GistsComponent },
  {path: ':username/repos', component:ReposComponent },
  {path: ':username/following', component: FollowingComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
