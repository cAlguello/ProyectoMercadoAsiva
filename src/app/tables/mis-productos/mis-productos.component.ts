import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServicesService } from '../../services.service';

declare const $: any;

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.scss']
})
export class MisProductosComponent implements OnInit {
  public dataTable: any;
  public regularItems: any;
  public dataProductos: Observable<any>;
  public misProductos: Observable<any>;  
  public mercadoPublicoProductos: Observable<any>;
  public dataProductosEmpresa: Observable<Array<any>>;
  public productoServicioEmpresa: any;
  public ordenesDeCompraEmpresa: any[] = [];
  public host: any;
  localRut = {
    rut: '',
    id_chilecompra: ''
  }

  constructor(private service: ServicesService, private chRef: ChangeDetectorRef) {
    setTimeout(function () {
      //TABLE1
      $('#productoDatatable').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "TODOS"]
        ],
        "info": false,
        responsive: true,
        language: {
          search: "_INPUT_",
          "lengthMenu": "Mostrar _MENU_ por pagina",
          "zeroRecords": "No hay resultados",
          searchPlaceholder: "Buscar Productos",
        }
      });
      //Mercado Publico
      $('#mercadoPublicoDatatable').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "TODOS"]
        ],
        "info": false,
        responsive: true,
        language: {
          search: "_INPUT_",
          "lengthMenu": "Mostrar _MENU_ por pagina",
          "zeroRecords": "No hay resultados",
          searchPlaceholder: "Buscar Productos",
        }
      });




    }, 500);
  }

  informacionOrdenDeCompra() {

    //CHILECOMPRA
    this.service.getEmpresaChileCompra(this.localRut.rut).subscribe(val1 => {
      console.log(this.localRut.rut);
      console.log("ID CHILECOMPRA");
      console.log(val1.listaEmpresas[0].CodigoEmpresa);
      this.localRut.id_chilecompra = val1.listaEmpresas[0].CodigoEmpresa;
      console.log(this.localRut);
      //ORDEN DE COMPRA
      this.service.getOrdenesDeCompraChileCompra(val1.listaEmpresas[0].CodigoEmpresa).subscribe(val2 => {
        console.log("ORDENES DE COMPRA CHILECOMPRA");
        for (var i = 0; i < val2.Listado.length; i++) {
          //console.log(val2.Listado[i].Codigo);
          this.ordenesDeCompraEmpresa.push(val2.Listado[i].Codigo);

        }
        console.log(this.ordenesDeCompraEmpresa);

        //DETALLE ORDEN DE COMPRA


        //  for (var f = 0; f < this.ordenesDeCompraEmpresa.length; f++) {
        for (var f = 0; f < 1; f++) {

          this.service.getDetalleOrdenDeCompraChileCompra(this.ordenesDeCompraEmpresa[f]).subscribe(val => {
            console.log("DATOS CHILECOMPRA");
            for (var i = 0; i < val.Listado.length; i++) {
              console.log(val);
              for (var e = 0; e < val.Listado[i].Items.Listado.length; e++) {
                console.log("PROCESANDO PRODUCTO " + e + " DE " + val.Listado[i].Items.Listado.length);
                this.productoServicioEmpresa.push(val.Listado[i].Items.Listado[e].Producto);
              }
            }
            console.log(this.productoServicioEmpresa);

            console.log(val.Listado[0].Items.Listado[0].Producto);
          });

        }
        //FIN DETALLE
      });
      //FIN ORDEN DE COMPRA

    });







    //CHILECOMPRA
  }
  ngOnInit() {
    this.service.getAllProductos().subscribe(val => {
     // this.dataProductos = val;

      //DATATABLE
      //Indice
      this.chRef.detectChanges();

      // Now you can use jQuery DataTables :
      const table: any = $('#indiceDatatable').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "TODOS"]
        ],
        "info": false,
        responsive: true,
        language: {
          search: "_INPUT_",
          "lengthMenu": "Mostrar _MENU_ por pagina",
          "zeroRecords": "No hay resultados",
          searchPlaceholder: "Buscar Productos"
        }
      });
      this.dataTable = table.DataTable();
    }, error => { console.log(error) }
    );
    console.log(this.regularItems);
  }

}
