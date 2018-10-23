'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">md-angular-cli-pro documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="changelog.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CHANGELOG
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-b5d67458b7a291e519e2af958c586d45"' : 'data-target="#xs-components-links-module-AppModule-b5d67458b7a291e519e2af958c586d45"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-b5d67458b7a291e519e2af958c586d45"' : 'id="xs-components-links-module-AppModule-b5d67458b7a291e519e2af958c586d45"' }>
                                        <li class="link">
                                            <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminLayoutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AuthLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthLayoutComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CalendarModule.html" data-type="entity-link">CalendarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CalendarModule-92dbac9dd3783a3e93e6e8bd81366f89"' : 'data-target="#xs-components-links-module-CalendarModule-92dbac9dd3783a3e93e6e8bd81366f89"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CalendarModule-92dbac9dd3783a3e93e6e8bd81366f89"' : 'id="xs-components-links-module-CalendarModule-92dbac9dd3783a3e93e6e8bd81366f89"' }>
                                        <li class="link">
                                            <a href="components/CalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ChartsModule.html" data-type="entity-link">ChartsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ChartsModule-02309a1980fa45654b819b957bde3893"' : 'data-target="#xs-components-links-module-ChartsModule-02309a1980fa45654b819b957bde3893"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ChartsModule-02309a1980fa45654b819b957bde3893"' : 'id="xs-components-links-module-ChartsModule-02309a1980fa45654b819b957bde3893"' }>
                                        <li class="link">
                                            <a href="components/ChartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ComponentsModule-ccc862e0478bc8c336a7e3c4bdda3786"' : 'data-target="#xs-components-links-module-ComponentsModule-ccc862e0478bc8c336a7e3c4bdda3786"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ComponentsModule-ccc862e0478bc8c336a7e3c4bdda3786"' : 'id="xs-components-links-module-ComponentsModule-ccc862e0478bc8c336a7e3c4bdda3786"' }>
                                        <li class="link">
                                            <a href="components/ButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/GridSystemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridSystemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/IconsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NotificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PanelsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PanelsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SweetAlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SweetAlertComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TypographyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypographyComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DashboardModule-1ca9945a7919f9ac36414b6979da1bb3"' : 'data-target="#xs-components-links-module-DashboardModule-1ca9945a7919f9ac36414b6979da1bb3"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DashboardModule-1ca9945a7919f9ac36414b6979da1bb3"' : 'id="xs-components-links-module-DashboardModule-1ca9945a7919f9ac36414b6979da1bb3"' }>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/FixedpluginModule.html" data-type="entity-link">FixedpluginModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-FixedpluginModule-25ec740ce18b0d48d79fc86c1d82efd6"' : 'data-target="#xs-components-links-module-FixedpluginModule-25ec740ce18b0d48d79fc86c1d82efd6"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FixedpluginModule-25ec740ce18b0d48d79fc86c1d82efd6"' : 'id="xs-components-links-module-FixedpluginModule-25ec740ce18b0d48d79fc86c1d82efd6"' }>
                                        <li class="link">
                                            <a href="components/FixedpluginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FixedpluginComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/FooterModule.html" data-type="entity-link">FooterModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-FooterModule-ea0be9123ed2cbf19e519baa2b4d3326"' : 'data-target="#xs-components-links-module-FooterModule-ea0be9123ed2cbf19e519baa2b4d3326"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FooterModule-ea0be9123ed2cbf19e519baa2b4d3326"' : 'id="xs-components-links-module-FooterModule-ea0be9123ed2cbf19e519baa2b4d3326"' }>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/Forms.html" data-type="entity-link">Forms</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-Forms-00543cf3460b3a214d8d0ad91c6a69b5"' : 'data-target="#xs-components-links-module-Forms-00543cf3460b3a214d8d0ad91c6a69b5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-Forms-00543cf3460b3a214d8d0ad91c6a69b5"' : 'id="xs-components-links-module-Forms-00543cf3460b3a214d8d0ad91c6a69b5"' }>
                                        <li class="link">
                                            <a href="components/ExtendedFormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExtendedFormsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FieldErrorDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldErrorDisplayComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegularFormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegularFormsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ValidationFormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ValidationFormsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/WizardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WizardComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MapsModule.html" data-type="entity-link">MapsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MapsModule-183e218392bd81449f8eca47646dcfc7"' : 'data-target="#xs-components-links-module-MapsModule-183e218392bd81449f8eca47646dcfc7"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MapsModule-183e218392bd81449f8eca47646dcfc7"' : 'id="xs-components-links-module-MapsModule-183e218392bd81449f8eca47646dcfc7"' }>
                                        <li class="link">
                                            <a href="components/FullScreenMapsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FullScreenMapsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/GoogleMapsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GoogleMapsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/VectorMapsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">VectorMapsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MaterialModule-b5d67458b7a291e519e2af958c586d45"' : 'data-target="#xs-components-links-module-MaterialModule-b5d67458b7a291e519e2af958c586d45"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MaterialModule-b5d67458b7a291e519e2af958c586d45"' : 'id="xs-components-links-module-MaterialModule-b5d67458b7a291e519e2af958c586d45"' }>
                                        <li class="link">
                                            <a href="components/AnalisisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnalisisComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PanelAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PanelAdminComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearcherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearcherComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SociosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SociosComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MdModule.html" data-type="entity-link">MdModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MdModule-6580648823e24e0171d18f2768fb003b"' : 'data-target="#xs-components-links-module-MdModule-6580648823e24e0171d18f2768fb003b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MdModule-6580648823e24e0171d18f2768fb003b"' : 'id="xs-components-links-module-MdModule-6580648823e24e0171d18f2768fb003b"' }>
                                        <li class="link">
                                            <a href="components/MdChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MdChartComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MdTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MdTableComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/NavbarModule.html" data-type="entity-link">NavbarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-NavbarModule-a3e76fdba597f1f3ff04b3a36bc455dc"' : 'data-target="#xs-components-links-module-NavbarModule-a3e76fdba597f1f3ff04b3a36bc455dc"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-NavbarModule-a3e76fdba597f1f3ff04b3a36bc455dc"' : 'id="xs-components-links-module-NavbarModule-a3e76fdba597f1f3ff04b3a36bc455dc"' }>
                                        <li class="link">
                                            <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PagesModule-93406e9aeda3ce2d50c7f941601bc110"' : 'data-target="#xs-components-links-module-PagesModule-93406e9aeda3ce2d50c7f941601bc110"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PagesModule-93406e9aeda3ce2d50c7f941601bc110"' : 'id="xs-components-links-module-PagesModule-93406e9aeda3ce2d50c7f941601bc110"' }>
                                        <li class="link">
                                            <a href="components/LockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LockComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PricingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PricingComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SidebarModule.html" data-type="entity-link">SidebarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SidebarModule-976585e3ac5721a21e75e8ce43bdf2d3"' : 'data-target="#xs-components-links-module-SidebarModule-976585e3ac5721a21e75e8ce43bdf2d3"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SidebarModule-976585e3ac5721a21e75e8ce43bdf2d3"' : 'id="xs-components-links-module-SidebarModule-976585e3ac5721a21e75e8ce43bdf2d3"' }>
                                        <li class="link">
                                            <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TablesModule.html" data-type="entity-link">TablesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TablesModule-f3fd80008e2b7ff2135646059f96e1ad"' : 'data-target="#xs-components-links-module-TablesModule-f3fd80008e2b7ff2135646059f96e1ad"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TablesModule-f3fd80008e2b7ff2135646059f96e1ad"' : 'id="xs-components-links-module-TablesModule-f3fd80008e2b7ff2135646059f96e1ad"' }>
                                        <li class="link">
                                            <a href="components/DataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ExtendedTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExtendedTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MisProductosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MisProductosComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegularTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegularTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SociosAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SociosAdminComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-TablesModule-f3fd80008e2b7ff2135646059f96e1ad"' : 'data-target="#xs-pipes-links-module-TablesModule-f3fd80008e2b7ff2135646059f96e1ad"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-TablesModule-f3fd80008e2b7ff2135646059f96e1ad"' : 'id="xs-pipes-links-module-TablesModule-f3fd80008e2b7ff2135646059f96e1ad"' }>
                                        <li class="link">
                                            <a href="pipes/CallbackPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CallbackPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TimelineModule.html" data-type="entity-link">TimelineModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TimelineModule-3f95bcdcec8ada25598912836e520a6f"' : 'data-target="#xs-components-links-module-TimelineModule-3f95bcdcec8ada25598912836e520a6f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TimelineModule-3f95bcdcec8ada25598912836e520a6f"' : 'id="xs-components-links-module-TimelineModule-3f95bcdcec8ada25598912836e520a6f"' }>
                                        <li class="link">
                                            <a href="components/TimelineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimelineComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UserModule-93747530b7d62a10192c2c921c9336a1"' : 'data-target="#xs-components-links-module-UserModule-93747530b7d62a10192c2c921c9336a1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UserModule-93747530b7d62a10192c2c921c9336a1"' : 'id="xs-components-links-module-UserModule-93747530b7d62a10192c2c921c9336a1"' }>
                                        <li class="link">
                                            <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/WidgetsModule.html" data-type="entity-link">WidgetsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-WidgetsModule-edbed5427b7dc10581358c57d33e3285"' : 'data-target="#xs-components-links-module-WidgetsModule-edbed5427b7dc10581358c57d33e3285"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-WidgetsModule-edbed5427b7dc10581358c57d33e3285"' : 'id="xs-components-links-module-WidgetsModule-edbed5427b7dc10581358c57d33e3285"' }>
                                        <li class="link">
                                            <a href="components/WidgetsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/MyErrorStateMatcher.html" data-type="entity-link">MyErrorStateMatcher</a>
                    </li>
                    <li class="link">
                        <a href="classes/MyErrorStateMatcher-1.html" data-type="entity-link">MyErrorStateMatcher</a>
                    </li>
                    <li class="link">
                        <a href="classes/PasswordValidation.html" data-type="entity-link">PasswordValidation</a>
                    </li>
                    <li class="link">
                        <a href="classes/dataConsulta.html" data-type="entity-link">dataConsulta</a>
                    </li>
                    <li class="link">
                        <a href="classes/dataEmpresa.html" data-type="entity-link">dataEmpresa</a>
                    </li>
                    <li class="link">
                        <a href="classes/dataEmpresaModal.html" data-type="entity-link">dataEmpresaModal</a>
                    </li>
                    <li class="link">
                        <a href="classes/dataSinLog.html" data-type="entity-link">dataSinLog</a>
                    </li>
                    <li class="link">
                        <a href="classes/dataUserEmpresa.html" data-type="entity-link">dataUserEmpresa</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/ServicesService.html" data-type="entity-link">ServicesService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/authGuard.html" data-type="entity-link">authGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/ChildrenItems.html" data-type="entity-link">ChildrenItems</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DataTable.html" data-type="entity-link">DataTable</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DataTable-1.html" data-type="entity-link">DataTable</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DropdownLink.html" data-type="entity-link">DropdownLink</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FileReaderEvent.html" data-type="entity-link">FileReaderEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FileReaderEventTarget.html" data-type="entity-link">FileReaderEventTarget</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LegendItem.html" data-type="entity-link">LegendItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Marker.html" data-type="entity-link">Marker</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NavItem.html" data-type="entity-link">NavItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RouteInfo.html" data-type="entity-link">RouteInfo</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableData.html" data-type="entity-link">TableData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableData-1.html" data-type="entity-link">TableData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableData2.html" data-type="entity-link">TableData2</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TableWithCheckboxes.html" data-type="entity-link">TableWithCheckboxes</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Task.html" data-type="entity-link">Task</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
