import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsConnectedGuard } from './core/is-connected.guard';
import { IsAdminGuard } from './core/is-admin.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


const routes: Routes = [{ path: '', component: HomePageComponent},
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [IsConnectedGuard, IsAdminGuard] },
  { path: 'admin', component: AdminPageComponent, canActivate: [IsAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
