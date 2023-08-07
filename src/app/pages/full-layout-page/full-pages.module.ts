import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from './full-layout-page.component';
import { AuthModule } from 'src/app/auth/auth.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { AppModule } from 'src/app/app.module';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule ,
        AuthModule ,
        MatGridListModule,
        MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatProgressBarModule,
         SharedModule
   
        
         

    ],
    declarations: [       
        FullLayoutPageComponent,DashboardComponent,
    ]
})
export class FullPagesModule { }
 