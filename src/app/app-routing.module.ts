import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaviorsComponent } from './saviors/saviors.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SaviorDetailComponent }  from './savior-detail/savior-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SaviorDetailComponent },
  { path: 'saviors', component: SaviorsComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
