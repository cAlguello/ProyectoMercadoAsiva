import { Component, OnChanges, Renderer, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ServicesService } from '../services.service';
import { graphData } from '../entities/graphData';
import { nodeData } from '../entities/nodeData';

declare var cytoscape: any;

@Component({
    selector: 'ng2-cytoscape',
    template: '<div id="cy"></div>',
    styles: [`#cy {
        height: 100%;
        width: 100%;
        position: relative;
        left: 0;
        top: 0;
    }`]
})


export class NgCyto implements OnChanges {

    @Input() public elements: any;
    @Input() public style: any;
    @Input() public layout: any;
    @Input() public zoom: any;
    node_name: string;

    @Output() select: EventEmitter<any> = new EventEmitter<any>();

    public constructor(private renderer: Renderer, private el: ElementRef, private service: ServicesService) {
        

        this.layout = this.layout || {
            name: 'breadthfirst',
            directed: true,
            padding: 0
        };

        this.zoom = this.zoom || {
            min: 1,
            max: 1.5
        };

        this.style = this.style || cytoscape.stylesheet()

            .selector('node')
            .css({
                'height': 80,
                'width': 80,
                'text-valign': 'center',
                'text-outline-width': 1,
               // 'text-outline-color': 'data(colorCode)',
              //  'background-color': 'data(colorCode)',
                'color': '#fff',
                'font-size': 10,
                'background-fit': 'cover',
            })
            .selector(':selected')
            .css({
                'border-width': 1,
                'border-color': 'black'
            })
            //
            .selector('#coca-cola')
            .css({
                'background-image': 'https://i3.wp.com/tentulogo.com/wp-content/uploads/HistoriadellogodeCocaCola.jpg'
            })
            .selector('#abastible')
            .css({
                'background-image': 'https://pbs.twimg.com/profile_images/1006566767437733888/X8Snf8d7_400x400.jpg'
            })
            .selector('#unab')
            .css({
                'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Logo-Universidad-Andres-Bello-2013-Nuevo.jpg/240px-Logo-Universidad-Andres-Bello-2013-Nuevo.jpg'
            })
            //
            .selector('edge')
            .css({
                'curve-style': 'bezier',
                'opacity': 0.666,
                'width': 'mapData(strength, 70, 100, 2, 6)',
                'target-arrow-shape': 'triangle',
                'line-color': 'data(colorCode)',
                'source-arrow-color': 'data(colorCode)',
                'target-arrow-color': 'data(colorCode)'
            })
            .selector('edge.questionable')
            .css({
                'line-style': 'dotted',
                'target-arrow-shape': 'diamond'
            })
            .selector('.faded')
            .css({
                'opacity': 0.25,
                'text-opacity': 0
            });
    }

    public ngOnChanges(): any {
        this.render();
        console.log(this.el.nativeElement);
    }

    nodeChange(event) {
        this.node_name = event;
    
        console.log(this.node_name);
      }

    public render() {
        this.service.getHanConsultadoEmpresa(sessionStorage.getItem('id')).subscribe(val => {
            var nodos = {
                nodes : [],
                edges : []
            } ;
            var data = [];

            for (var i = 0; i < val.length; i++) {
                data.push(val[i])
                nodos.nodes.push(data);
                //nodos.edges.push(data);
              }
           
            console.log('DATOS NODOS')
            console.log(data);
            console.log(nodos)




            let cy_contianer = this.renderer.selectRootElement("#cy");
            let localselect = this.select;
            let cy = cytoscape({
                container: cy_contianer,
                layout: this.layout,
                minZoom: this.zoom.min,
                maxZoom: this.zoom.max,
                style: this.style,
                elements: nodos,
            });


            cy.on('tap', 'node', function (e) {
                var node = this;
                var neighborhood = node.neighborhood().add(node);

                cy.elements().addClass('faded');
                neighborhood.removeClass('faded');
                localselect.emit(node.data("name"));
            });

            cy.on('tap', function (e) {
                if (e.cyTarget === cy) {
                    cy.elements().removeClass('faded');
                }
            });
            //
        },
            error => { console.log(error) });
        //
    }




}
