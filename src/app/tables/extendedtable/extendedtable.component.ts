import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServicesService } from '../../services.service';
import swal from 'sweetalert2';

declare var $: any;
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
declare interface TableWithCheckboxes {
    id?: number;
    ischecked?: boolean;
    product_name: string;
    type: string;
    quantity: number;
    price: any;
    amount: string;
}
export interface TableData2 {
    headerRow: string[];
    dataRows: TableWithCheckboxes[];
}

@Component({
    selector: 'app-extended-table-cmp',
    templateUrl: 'extendedtable.component.html'
})

export class ExtendedTableComponent implements OnInit {
    public consultasRecibidas: Observable<any>;
    public consultasRespondidas: Observable<any>;
    public tableData1: TableData;
    public tableData2: TableData2;
    public tableData3: TableData;
    constructor(private service: ServicesService) { }
    //SweetAlert
    showSwal() {
        swal({
            input: 'textarea',
            inputPlaceholder: 'Escribe tu respuesta aquí...',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            confirmButtonText: 'Enviar',
            cancelButtonClass: 'btn btn-danger',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false
        }).then((result) => {
            if (result.value) {
                
                swal({
                    title: 'Respuesta Enviada!',
                    text: 'Siempre responde rápidamente para mejorar tus estadísticas',
                    type: 'success',
                    confirmButtonClass: "btn btn-success",
                    buttonsStyling: false
                }).catch(swal.noop)
            } else {
                swal({
                    title: 'Cancelado',
                    text: 'No se ha enviado la respuesta',
                    type: 'error',
                    confirmButtonClass: "btn btn-info",
                    buttonsStyling: false
                }).catch(swal.noop)
            }
        })

    }
    ngOnInit() {
        
        this.service.getConsultasRecibidas(sessionStorage.getItem('id')).subscribe(val=>{
            this.consultasRecibidas=val;
            console.log(val);
        }, error =>{
            console.log(error);
        });

        this.service.getConsultasRespondidas(sessionStorage.getItem('id')).subscribe(val=>{
            this.consultasRespondidas=val;
            console.log(val);
        }, error =>{
            console.log(error);
        });

    }

}