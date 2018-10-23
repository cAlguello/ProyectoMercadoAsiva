import { Routes } from '@angular/router';

import { ExtendedTableComponent } from './extendedtable/extendedtable.component';
import { RegularTableComponent } from './regulartable/regulartable.component';
import { DataTableComponent } from './datatable.net/datatable.component';
import { SociosAdminComponent } from './socios-admin/socios-admin.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';

export const TablesRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'regular',
        component: RegularTableComponent
    }]
    }, {
    path: '',
    children: [ {
      path: 'extended',
      component: ExtendedTableComponent
    }]
    }, {
      path: '',
      children: [ {
        path: 'buzon',
        component: DataTableComponent
        }]
    },
    {
      path: '',
      children: [ {
        path: 'socios',
        component: SociosAdminComponent
        }]
    },
    {
      path: '',
      children: [ {
        path: 'productos',
        component: MisProductosComponent
        }]
    }
];
