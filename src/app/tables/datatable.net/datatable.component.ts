// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Observable } from 'rxjs/Observable';


declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'app-data-table-cmp',
    templateUrl: 'datatable.component.html'
})

export class DataTableComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    public dataEmpresa: Observable<any>;
    public oTable:any;

    constructor( private service: ServicesService) {
      setTimeout(function(){
        //
        $(document).ready(function() {
          var users = $('#datatables').DataTable({
            "dom": "t",
            "columnDefs": [
              {
                  "targets": [ 1 ],
                  "visible": false,
                  "searchable": true
              }
          ]
          });
        
          $('#myInputTextField').keyup(function() {
            users.search($(this).val()).draw();
          })
        });
      },500);
     
  }

    ngOnInit() {
      this.service.getAllEmpresasConData().subscribe(val=>{
        this.dataEmpresa= val;
        console.log(val);
      },
    error=>{
      console.log(error);
    });
        this.dataTable = {
            headerRow: [ 'Nombre Empresa', 'Descripccion'],
            footerRow: [ 'Nombre Empresa', 'Descripccion' ],

            dataRows: [
                ['Empresa A', 'Direccion 1', 'Giro Empresa 1', 'Item 1'],
                ['Empresa B', 'Direccion 2', 'Giro Empresa 2', 'Item 2'],
                ['Empresa C', 'Direccion 3', 'Giro Empresa 3', 'Item 3'],
                ['Empresa D', 'Direccion 4', 'Giro Empresa 4', 'Item 4'],
                ['Empresa E', 'Direccion 5', 'Giro Empresa 5', 'Item 5'],
                ['Empresa F', 'Direccion 6', 'Giro Empresa 6', 'Item 6'],
                ['Empresa G', 'Direccion 7', 'Giro Empresa 7', 'Item 7'],
                ['Empresa H', 'Direccion 8', 'Giro Empresa 8', 'Item 8'],
                ['Empresa I', 'Direccion 9', 'Giro Empresa 9', 'Item 9'],
                ['Empresa J', 'Direccion 10', 'Giro Empresa 10', 'Item 10'],
                ['Empresa K', 'Direccion 11', 'Giro Empresa 11', 'Item 11'],
                ['Empresa L', 'Direccion 12', 'Giro Empresa 12', 'Item 12'],
            ]
         };

    }

    ngAfterViewInit() {     
     

      $('.card .material-datatables label').addClass('form-group');
    }
}
