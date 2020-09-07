import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserListComponent } from './user/user-list/user-list.component';


const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'user/new', component: UserNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
