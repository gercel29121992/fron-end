import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";

import { ErrorPageComponent } from "./error/error-page.component";


import { MaintenancePageComponent } from "./maintenance/maintenance-page.component";


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
 
        ErrorPageComponent,
      
       
        MaintenancePageComponent,
    ]
})
export class ContentPagesModule { }
