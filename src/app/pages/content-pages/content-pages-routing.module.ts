import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ErrorPageComponent } from "./error/error-page.component";

import { MaintenancePageComponent } from "./maintenance/maintenance-page.component";


const routes: Routes = [
  {
    path: '',
    children: [
     
      {
        path: 'error',
        component: ErrorPageComponent,
        data: {
          title: 'Error Page'
        }
      },
     
      {
        path: 'maintenance',
        component: MaintenancePageComponent,
        data: {
          title: 'Maintenance Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule { }
