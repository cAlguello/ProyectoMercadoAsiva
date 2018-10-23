import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';
import { MaterialModule } from '../app.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [UserComponent]
})

export class UserModule {}
