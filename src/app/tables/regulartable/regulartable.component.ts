import { Component, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';
import swal from 'sweetalert2';
import { ServicesService } from '../../services.service';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { dataConsulta } from '../../entities/dataConsulta';
import { dataEmpresa } from '../../entities/dataEmpresa';
import { dataEmpresaModal } from '../../entities/dataEmpresaModal';
import { FormControl } from '../../../../node_modules/@angular/forms';
import { map, startWith } from 'rxjs/operators';

declare const $: any;
@Component({
    selector: 'app-regular-table-cmp',
    templateUrl: 'regulartable.component.html',
    providers: [DatePipe]
})

export class RegularTableComponent implements OnInit {
    public searchText: any;
    public dataEmpresa: Observable<any>;
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;
    public tableTest: TableData;
    EmpresaModal: dataEmpresaModal = new dataEmpresaModal(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    //public dataConsulta: dataConsulta;
    public dataEmpresaConsultada: dataEmpresa;
    public dataConsultaTest: dataConsulta;

    //TEST
    items;
    currentItem= '';
    
    //TEST

    dataConsulta = {
        usuario_id: "",
        empresa_id_empresa: "",
        fecha_consulta: "",
        solicitud_consulta: ""
    }
    dataEmpresaLog = {
        id_empresa_log_consulta_empresa: "",
        empresa_id_empresa_log_consulta_empresa: "",
        fecha_log_consulta_empresa: ""

    }
    //SweetAlert
    showSwal(Empresa: dataEmpresa) {
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
                this.dataConsulta.empresa_id_empresa = Empresa.empresa_id_empresa;
                this.dataConsulta.usuario_id = sessionStorage.getItem('id');
                this.dataConsulta.solicitud_consulta = result.value;
                this.dataConsulta.fecha_consulta = this.dateFilter.transform(new Date(), 'yy-MM-dd hh:mm');
                //console.log(result);
                console.log(this.dataConsulta);
                this.service.addConsulta(this.dataConsulta).subscribe(val => {
                    console.log("ENTRO EN POST");
                    console.log(val)
                },
                    error => { console.log(error) });
                swal({
                    title: 'Consulta Enviada!',
                    text: 'Te avisaremos en tu buzón cuando te respondan',
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

    constructor(private dateFilter: DatePipe, private service: ServicesService) {
        
    }



    search(text: any) {
        this.service.addLogBusqueda(text).subscribe(val => {
        },
            error => {
                console.log(error)
            });
        this.service.searchProductoLogin(text).subscribe(val => {
            if(val){                
            this.dataEmpresa = val;
            }
            else{
                this.dataEmpresa = null;
            }
        },
            error => {
                console.log(error);
            })
    }
    setEmpresaModal(Empresa: any) {
        //LOG DE QUE SE HA CONSULTADO EMPRESA
        this.dataEmpresaLog.id_empresa_log_consulta_empresa = sessionStorage.getItem('id');
        this.dataEmpresaLog.empresa_id_empresa_log_consulta_empresa = Empresa.id_empresa;
        this.dataEmpresaLog.fecha_log_consulta_empresa = this.dateFilter.transform(new Date(), 'yy-MM-dd hh:mm');
        this.service.addLogEmpresa(this.dataEmpresaLog).subscribe(val => {

        },
            error => { console.log(error) }
        );

        //SET DE DATA MODAL
        this.EmpresaModal.nombre_empresa = Empresa.razon_social_empresa;
        this.EmpresaModal.descripcion_empresa = Empresa.descripcion_empresa;
        this.EmpresaModal.calle_empresa = Empresa.calle_empresa;
        this.EmpresaModal.numero_calle_empresa = Empresa.numero_calle_empresa;
        this.EmpresaModal.ciudad_empresa = Empresa.ciudad_empresa;
        this.EmpresaModal.encargado_contacto_empresa = Empresa.encargado_contacto_empresa;
        this.service.getProductosEmpresasConData(Empresa.id_empresa).subscribe(val => {
            this.EmpresaModal.productos_empresa = val;
            //console.log(this.EmpresaModal.productos_empresa);
            //console.log(val);
        });
        this.service.getGirosEmpresasConData(Empresa.id_empresa).subscribe(val => {
            this.EmpresaModal.giros_empresa = val;
        });
    }
    //

    doFilter() {
        this.items = this.service.getAllProductos()
          .pipe(
          map(items => this.filter(items)),
        )
      }

      filter(values) {
        return values.filter(items => items.nombre_producto.toLowerCase().includes(this.currentItem))
      }

      ///
    ngOnInit() {
      
        
        this.service.getAllEmpresasConData().subscribe(val => {
            this.dataEmpresa = val;
            console.log(val);
        },
            error => {
                console.log(error);
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
