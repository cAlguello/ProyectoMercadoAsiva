import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;
//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}
//Menu Admin
export const ADMINROUTES: RouteInfo[] = [{
    path: '/charts',
    title: 'Analisis',
    type: 'link',
    icontype: 'assessment'
}, {
    path: '/tables/socios', type: 'link', icontype: 'business', title: 'Socios'
}
];


//Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Panel de Control',
    type: 'link',
    icontype: 'dashboard'
}, {
    path: '/tables/regular', type: 'link', icontype: 'search', title: 'Buscador'
},
{
    path: '/tables/extended', type: 'link', icontype: 'mail_outline', title: 'Buzón'

},
{
    path: '/tables/productos', type: 'link', icontype: 'store_mall_directory', title: 'Mis Productos'

}
    , {

    path: '/pages/user',
    title: 'Mi información',
    type: 'link',
    icontype: 'perm_identity',

}
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public sessionData: any;
    public menuItems: any[];
    public menuItemsAdmin: any[];

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.sessionData = sessionStorage.getItem('id');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.menuItemsAdmin = ADMINROUTES.filter(menuItem => menuItem);
    }
    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
