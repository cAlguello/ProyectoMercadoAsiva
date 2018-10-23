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
  selector: 'app-socios-admin',
  templateUrl: './socios-admin.component.html',
  styleUrls: ['./socios-admin.component.scss']
})
export class SociosAdminComponent implements OnInit, AfterViewInit {
  public dataTable: DataTable;
  public dataTable2: DataTable;
  public empresasActivas: Observable<any>;
  public empresasInactivas: Observable<any>;

  constructor(private service: ServicesService) {
    setTimeout(function () {
      //TABLE1
      $('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Buscar Socios",
        }
      });
      //TABLE2
      $('#datatables2').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Buscar Socios",
        }

      });

    }, 500);

  }


  ngOnInit() {
    this.service.getEmpresasActivas().subscribe(val => {
      this.empresasActivas = val;
      console.log(val);
    },
      error => {
        console.log(error);
      });

    this.service.getEmpresasInactivas().subscribe(val => {
      this.empresasInactivas = val;
      console.log(val);
    },
      error => {
        console.log(error);
      });
  }



  ngAfterViewInit() {




    $('.card .material-datatables label').addClass('form-group');
  }

}
