import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';

import { Observable } from 'rxjs/Observable';

import * as Chartist from 'chartist';
import { ServicesService } from '../services.service';

//
import {MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, MarkerTypeId, IMapOptions, IBox, WindowRef, DocumentRef, MapServiceFactory, ILatLong, BingMapServiceFactory, ClusterPlacementMode, ClusterClickAction } from 'angular-maps';
let PathData: Array<any> = null;
//
declare var cytoscape: any;
declare const $: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
    constructor(private service: ServicesService) { }
    public dataLogEmpresa: Observable<any>;
    public tableData: TableData;
    startAnimationForLineChart(chart: any) {
        let seq: any, delays: any, durations: any;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data: any) {

            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq = 0;
    }
    startAnimationForBarChart(chart: any) {
        let seq2: any, delays2: any, durations2: any;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data: any) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq2 = 0;
    }
    // constructor(private navbarTitleService: NavbarTitleService) { }
    public ngOnInit() {
        this.service.getCantidadLogEmpresa(sessionStorage.getItem('id')).subscribe(val => {
            this.dataLogEmpresa = val;
        },
            error => { console.log(error) });


        var labelsUso = [], dataUso = [], coloRUso = [];
        this.service.getProductosMasBuscadosGeneral().subscribe(val => {
            for (var i = 0; i < val.length; i++) {
                dataUso.push(val[i].total);
                labelsUso.push(val[i].nombre_producto);
            }
            //
            console.log(dataUso);
            console.log(labelsUso);


        });
        this.tableData = {
            headerRow: ['Producto/Servicio', 'Cantidad de Busquedas', 'Cantidad de Contactos'],
            dataRows: [
                ['1', 'Item 1', '40'],
                ['2', 'Item 2', '20'],
                ['3', 'Item 3', '23'],
                ['4', 'Item 4', '12'],
                ['5', 'Item 5', '8'],
                ['6', 'ITem 6', '3']
            ]
        };
        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        const dataDailySalesChart = {
            labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
            series: [
                [0, 1, 2, 0, 0, 1, 0]
            ]
        };

        const optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 10, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };

        const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        const dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        const optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better
            // look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };

        const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart,
            optionsCompletedTasksChart);

        this.startAnimationForLineChart(completedTasksChart);

        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */


        const dataWebsiteViewsChart = {
            labels: ['Bebidas', 'Servicios de Educación', 'Gas'],
            series: [[3, 5, 10]]
        };


        const optionsWebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 1,
            high: 10,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        const responsiveOptions: any = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

        this.startAnimationForBarChart(websiteViewsChart);

        $('#worldMap').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#b3b3b3',
            enableZoom: true,
            hoverColor: '#eee',
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#c9dfaf',
            selectedRegions: null,
            showTooltip: true,
            onRegionClick: function (element, code, region) {
                var message = 'You clicked "'
                    + region
                    + '" which has the code: '
                    + code.toUpperCase();

                alert(message);
            }
        });
    }
    ngAfterViewInit() {
        const breakCards = true;
        if (breakCards === true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                const $fix_button = $(this);
                const $card = $(this).parent('.card');
                $card.find('.fix-broken-card').click(function () {
                    const $header = $(this).parent().parent().siblings('.card-header, .card-image');
                    $header.removeClass('hinge').addClass('fadeInDown');

                    $card.attr('data-count', 0);

                    setTimeout(function () {
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });

                $card.mouseenter(function () {
                    const $this = $(this);
                    const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr('data-count', hover_count);
                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-image').addClass('hinge animated');
                    }
                });
            });
        }
    }
}
