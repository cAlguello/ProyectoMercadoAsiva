import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';

import { Observable } from 'rxjs/Observable';

import * as Chartist from 'chartist';
import { ServicesService } from '../services.service';

//
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, MarkerTypeId, IMapOptions, IBox, WindowRef, DocumentRef, MapServiceFactory, ILatLong, BingMapServiceFactory, ClusterPlacementMode, ClusterClickAction } from 'angular-maps';
let PathData: Array<any> = null;
//
declare var cytoscape: any;
declare const $: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
    constructor(private service: ServicesService, private chRef: ChangeDetectorRef) { }
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


        var labelsUso = [], dataUso = [], coloRUso = [], max=0;
        this.service.getProductosMasBuscadosGeneral().subscribe(val => {
            for (var i = 0; i < val.length; i++) {
                dataUso.push(val[i].total);
                if(val[i].total>max){
                    max=val[i].total;
                }
                labelsUso.push(val[i].nombre_producto);
            }
            coloRUso.push(dataUso);
            //
            console.log(dataUso);
            console.log(labelsUso);
            //

            const dataWebsiteViewsChart = {
                labels: labelsUso,
                series: coloRUso
            };


            const optionsWebsiteViewsChart = {
                axisX: {
                    showGrid: false
                },
                low: 1,
                high: max,
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

            //


        });
      
        /* ----------==========     Daily Sales Chart initialization    ==========---------- */
        var labelsMonthly = [], seriesMonthly = [], seriesMonthly2 = [], maxMonthly=0;
        this.service.getConsultasMes(sessionStorage.getItem('id')).subscribe(val => {
            for (var i = 0; i < val.length; i++) {
                seriesMonthly.push(val[i].dataLog);
                if(val[i].dataLog>maxMonthly){
                    maxMonthly=val[i].dataLog;
                }
                labelsMonthly.push(val[i].month);
            }
            seriesMonthly2.push(seriesMonthly);
            const dataDailySalesChart = {
                labels: labelsMonthly,
                series: seriesMonthly2
            };
    
            const optionsDailySalesChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: maxMonthly+10, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
            };
    
            const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
    
            this.startAnimationForLineChart(dailySalesChart);
           


        });

        //FIN DAILY
       
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */



        
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
