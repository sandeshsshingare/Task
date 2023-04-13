import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { HomeComponent } from '../home.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: 'myProfile',
    component: MyProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
