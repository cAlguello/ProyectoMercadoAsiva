import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Observable } from 'rxjs/Observable';
import { dataEmpresaModal } from '../../entities/dataEmpresaModal';
import { mail } from '../../entities/mail';

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
  public mailContacto: mail;
  public dataTable: DataTable;
  public dataTable2: DataTable;
  public empresasActivas: Observable<any>;
  public empresasInactivas: Observable<any>;
  mail = {
    mensaje:"",
    mensaje2:"",
    mensaje3:"",
    destinatario: ""
  }

  constructor(private service: ServicesService, private chRef: ChangeDetectorRef) {


  }

  enviarCredencial(empresa: dataEmpresaModal){
    this.service.getUser(empresa.id_empresa).subscribe(val => {
      this.mail.destinatario=empresa.mail_empresa,
      this.mail.mensaje="Hola, lo invitamos a activarse en Mercado ASIVA, a continuación tus credenciales.";
      this.mail.mensaje2=val.usuario;
      this.mail.mensaje3=val.password;
      console.log(this.mail);
      this.service.sendEmail(this.mail).subscribe(val=>{

      }, error =>{
        console.log(error);
      });
    });

  }

  ngOnInit() {
    this.service.getEmpresasActivas().subscribe(val => {
      this.empresasActivas = val;
      console.log(val);
      this.chRef.detectChanges();
      const table: any = $('#datatables').DataTable({
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
      this.dataTable = table.DataTable();
    },
      error => {
        console.log(error);
      });

    this.service.getEmpresasInactivas().subscribe(val => {
      this.empresasInactivas = val;
      console.log(val);
      this.chRef.detectChanges();
      const table: any = $('#datatables2').DataTable({
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
      this.dataTable2 = table.DataTable();
    },
      error => {
        console.log(error);
      });
  }



  ngAfterViewInit() {




    $('.card .material-datatables label').addClass('form-group');
  }

}
