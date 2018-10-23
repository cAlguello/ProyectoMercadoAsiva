import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { TablesRoutes } from './tables.routing';

import { ExtendedTableComponent } from './extendedtable/extendedtable.component';
import { RegularTableComponent } from './regulartable/regulartable.component';
import { DataTableComponent } from './datatable.net/datatable.component';
import { CallbackPipe } from '../callback.pipe';
import { SociosAdminComponent } from './socios-admin/socios-admin.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';
import { TagInputModule } from '../../../node_modules/ngx-chips';
import { NgxTypeaheadModule } from 'ngx-typeahead'; //Nuevo

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    TagInputModule,
    NgxTypeaheadModule //Nuevo
  ],
  declarations: [
      ExtendedTableComponent,
      DataTableComponent,
      RegularTableComponent,
      CallbackPipe,
      SociosAdminComponent,
      MisProductosComponent

  ]
})

export class TablesModule {}
