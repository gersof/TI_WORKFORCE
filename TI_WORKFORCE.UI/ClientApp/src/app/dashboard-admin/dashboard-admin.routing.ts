import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dasboard Admin'
    },
    children: [
      {
        path: 'home',
        component: HomeAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DashboardAdminRouting {
}
