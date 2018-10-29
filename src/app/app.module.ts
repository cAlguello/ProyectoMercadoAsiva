import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgCyto} from './ng-cyto/ng-cyto.directive';

import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedpluginModule } from './shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { SearcherComponent } from './searcher/searcher.component';
import { BrowserModule } from '@angular/platform-browser';
import { authGuard } from './entities/authGuard';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CallbackPipe } from './callback.pipe';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { SociosComponent } from './panel-admin/socios/socios.component';
import { AnalisisComponent } from './panel-admin/analisis/analisis.component';
import { GraphComponent } from './graph/graph.component';
//import { DashboardModule } from './dashboard/dashboard.module';
//nuevo
/*import {
  MapModule, MapAPILoader, WindowRef,
  DocumentRef, BingMapAPILoaderConfig, BingMapAPILoader,
  GoogleMapAPILoader, GoogleMapAPILoaderConfig
} from 'angular-maps';*/
const useBing = true;
//fin nuevo

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [authGuard//, {
  //  provide: MapAPILoader, deps: [], useFactory: useBing ? BingMapServiceProviderFactory : GoogleMapServiceProviderFactory
//  }
]
  ,
  declarations: [HomeComponent, SearcherComponent, PanelAdminComponent, SociosComponent, AnalisisComponent]
})
export class MaterialModule { }

@NgModule({
  imports: [
    //nuevo
 /*   BrowserModule,
    useBing ? MapModule.forRootBing() : MapModule.forRootGoogle(),
   */ //fin nuevo
    HttpModule,
    //DashboardModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    MaterialModule,
    MatNativeDateModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedpluginModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent   
  ],
  providers: [authGuard//, {
   // provide: MapAPILoader, deps: [], useFactory: useBing ? BingMapServiceProviderFactory : GoogleMapServiceProviderFactory
  //}
],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

export function BingMapServiceProviderFactory() {
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = "AhB4ueykZeH9sG0FnMQksz10l57G2hR-IcCZQyjpvHlE-zfLhjE6Wg9ESCvbij4J";
  // replace with your bing map key
  // the usage of this key outside this plunker is illegal. 
  bc.branch = "experimental";
  // to use the experimental bing brach. There are some bug fixes for
  // clustering in that branch you will need if you want to use 
  // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}

export function GoogleMapServiceProviderFactory() {
  const gc: GoogleMapAPILoaderConfig = new GoogleMapAPILoaderConfig();
  gc.apiKey = 'AIzaSyDe2QqXrbtaORvL-I0WHpiI72HxtfTz5Zo';
  // replace with your google map key
  // the usage of this key outside this plunker is illegal. 
  gc.enableClustering = true;
  return new GoogleMapAPILoader(gc, new WindowRef(), new DocumentRef());
}*/