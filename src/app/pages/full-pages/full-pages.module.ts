import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FullPagesRoutingModule } from "./full-pages-routing.module";



import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { AuthModule } from 'src/app/auth/auth.module';



@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        FormsModule,
        AuthModule,

        NgModule
    ],
    declarations: [
        UserProfilePageComponent,

    ]
})
export class FullPagesModule { }
