import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { GraphComponent } from '../graph/graph.component';
import { NgCyto } from '../ng-cyto/ng-cyto.directive';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MdModule,
        MaterialModule,

    ],
    declarations: [
        DashboardComponent,
        GraphComponent,
        NgCyto
    ]
})

export class DashboardModule { }
