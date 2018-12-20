import { Component, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { ServicesService } from "../services.service";
import { Observable } from "rxjs";
import swal from 'sweetalert2';
import { dataEmpresa } from "../entities/dataEmpresa";
import { DatePipe } from "@angular/common";
import { dataEmpresaModal } from "../entities/dataEmpresaModal";
declare var cytoscape: any;
declare const $: any;

@Component({
  selector: 'cy-graph',
  templateUrl: './graph.component.html',
  styles: [`
      ng2-cytoscape {
        height: 100vh;
        float: left;
        width: 100%;
        position: relative;
    }`],
  providers: [DatePipe]
})

export class GraphComponent {
  constructor(private service: ServicesService, private dateFilter: DatePipe, private chRef: ChangeDetectorRef) {
  }
  //
  public dataEmpresa: Observable<any>;
  public graphData: any;
  
  mail = {
    mensaje: "",
    mensaje2: "",
    mensaje3: "",
    destinatario: ""
}
  dataConsulta = {
    usuario_id: "",
    empresa_id_empresa: "",
    fecha_consulta: "",
    solicitud_consulta: ""
  }

  //SweetAlert
  showSwal(Empresa: dataEmpresaModal) {
    swal({
      input: 'textarea',
      inputPlaceholder: 'Escribe tu consulta aquí...',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      confirmButtonText: 'Enviar',
      cancelButtonClass: 'btn btn-danger',
      cancelButtonText: 'Cancelar',
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {

        //console.log(Empresa);
        this.dataConsulta.empresa_id_empresa = Empresa.id_empresa;
        this.dataConsulta.usuario_id = sessionStorage.getItem('id');
        this.dataConsulta.solicitud_consulta = result.value;
        this.dataConsulta.fecha_consulta = this.dateFilter.transform(new Date(), 'yy-MM-dd hh:mm');
        //console.log(result);
        console.log(this.dataConsulta);

        this.service.addConsulta(this.dataConsulta).subscribe(val => {
        }, error => {
        });
        this.mail.destinatario = Empresa.mail_empresa;
        this.mail.mensaje = 'Te han realizado una consulta en MERCADO ASIVA, por favor revisa el buzón en la plataforma.'
        this.service.sendEmail(this.mail).subscribe(val => {
        }, error => { });
        swal({
            title: 'Consulta Enviada!',
            text: 'Te avisaremos por correo cuando te respondan',
            type: 'success',
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false
        }).catch(swal.noop)
    } else {
        swal({
          title: 'Cancelado',
          text: 'No se ha enviado la consulta',
          type: 'error',
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false
        }).catch(swal.noop)
      }
    })

  }

  //
  node_name: string;
  public hanConsultadoEmpresa: Observable<any>;
  public nombre_empresa: string;
  //public graphData: any;
  layout = {
    name: 'dagre',
    rankDir: 'LR',
    directed: true,
    padding: 0
  };

 /* graphData = {
    nodes: [
      { data: { id: "93281000", name: 'Coca Cola', weight: 100, colorCode: 'blue', shapeType: 'roundrectangle', image: 'https://i3.wp.com/tentulogo.com/wp-content/uploads/HistoriadellogodeCocaCola.jpg' } },
      { data: { id: "91806000", name: 'Abastible', weight: 100, colorCode: 'blue', shapeType: 'roundrectangle', image: 'https://pbs.twimg.com/profile_images/1006566767437733888/X8Snf8d7_400x400.jpg' } },
      { data: { id: "71540100", name: 'UNAB', weight: 100, colorCode: 'blue', shapeType: 'roundrectangle', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Logo-Universidad-Andres-Bello-2013-Nuevo.jpg/240px-Logo-Universidad-Andres-Bello-2013-Nuevo.jpg' } },

    ],
    edges: [
      { data: { id: "93281000", name: 'Coca Cola', source: "91806000", target: "71540100", strength: 10, weight: 100, colorCode: 'blue', shapeType: 'roundrectangle', image: 'https://i3.wp.com/tentulogo.com/wp-content/uploads/HistoriadellogodeCocaCola.jpg' } },
     // { data: { source: "91806000", target: "71540100", colorCode: 'blue', strength: 10 } },
      { data: { source: "93281000", target: "71540100", colorCode: 'blue', strength: 10 } }
    ]
  };*/


  public ngOnInit() {
    this.service.getHanConsultadoEmpresa(sessionStorage.getItem('id')).subscribe(val => {
      var graphDataService = {
        nodes: [],
        edges: []
      };
      //var data = [];

      for (var i = 0; i < val.length; i++) {
        // console.log("TEST GRAPH");
        //console.log(val[i]);
        // data.push(val[i])

        //graphDataService.edges.push(val[i]);
        graphDataService.nodes.push(val[i]);
        //nodos.edges.push(data);
      }
      graphDataService.nodes.push({ data: { id: sessionStorage.getItem('id'), name: sessionStorage.getItem('id'), weight: 100, colorCode: 'blue', shapeType: 'ellipse', image: '/assets/img/icon-enterprise.png' } })
      // this.graphData = graphDataService;

     // console.log('DATOS NODOS')
      // console.log(data);
     // console.log(graphDataService)
      //console.log(this.graphData);
//TEST
this.service.graphDataEdgeEmpresa(sessionStorage.getItem('id')).subscribe(val => { 
  for (var i = 0; i < val.length; i++) { 
    graphDataService.edges.push(val[i]);
  } 
  this.graphData = graphDataService;

  console.log('DATOS NODOS')
  // console.log(data);
  console.log(graphDataService)
  console.log(this.graphData);

});
//TEST
    });



  }

  nodeChange(event) {
    this.node_name = event;
    this.service.getDataEmpresaId(event).subscribe(val => {
      this.dataEmpresa = val;
      this.nombre_empresa = val[0].razon_social_empresa;
      console.log(this.nombre_empresa)
      console.log(val);
    });
    this.service.getHanConsultadoEmpresaDataCompleta(sessionStorage.getItem('id')).subscribe(val => {
      this.hanConsultadoEmpresa = val;
    });

    console.log(this.node_name);
  }

}