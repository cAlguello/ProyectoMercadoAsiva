import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ServicesService } from '../../services.service';
import { Observable } from 'rxjs/Observable';
import { dataSinLog } from '../../entities/dataSinLog';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-lock-cmp',
    templateUrl: './lock.component.html'
})

export class LockComponent implements OnInit, OnDestroy {
    items;
    currentItem= '';
    public searchText1: any;
    public totalEmpresas: any;
    public totalProductos: any;
    public totalContactos: any;
    public dataBusquedaEmpresa: Observable<any>;
    public dataBusquedaContacto: Observable<any>;
    dataSinLog: dataSinLog = new dataSinLog(null, null, null);
    test: Date = new Date();
    constructor(private service: ServicesService) {
    }
    doFilter() {
        this.items = this.service.getAllProductos()
          .pipe(
          map(items => this.filter(items)),
        )
      }

      filter(values) {
        return values.filter(items => items.nombre_producto.toLowerCase().includes(this.currentItem))
      }
    ngOnInit() {
        //test
        // Get the input field
      /*  var input = document.getElementById("searchText1");

        // Execute a function when the user releases a key on the keyboard
        input.addEventListener("keyup", function (event) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Trigger the button element with a click
                document.getElementById("button-search").click();
            }
        });*/
        //
        this.service.getNumEmpresas().subscribe(val => {
            this.totalEmpresas = val;
        }, error => { console.log(error) });

        this.service.getNumProductos().subscribe(val => {
            this.totalProductos = val;
        }, error => { console.log(error) });

        this.service.getNumContactos().subscribe(val => {
            this.totalContactos = val;
        }, error => { console.log(error) });

        const body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }


    search(text: any) {
        this.service.searchProductoSinLogin(text).subscribe(val => {
            this.dataBusquedaEmpresa = val;
            console.log(this.dataSinLog);

        },
            error => {
                console.log(error);
            });
        this.service.busquedasProductoUnico(text).subscribe(val => {
            this.dataBusquedaContacto = val;
        }, error => {
            console.log(error);
        });
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
        body.classList.remove('off-canvas-sidebar');

    }
}
