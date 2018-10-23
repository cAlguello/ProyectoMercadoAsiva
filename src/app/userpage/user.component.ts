import { Component, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { dataEmpresaModal } from '../entities/dataEmpresaModal';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap, startWith, switchMap, debounceTime, distinctUntilChanged, takeWhile, first } from 'rxjs/operators';

declare const $: any;

@Component({
    selector: 'app-user-cmp',
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss']
})



export class UserComponent {
    public dataTable: any;
    public submitted: boolean;
    public userForm: FormGroup;
    public DataGiros: any;
    public AllGiros: Observable<any>;
    public myControl = new FormControl();
    public options: any;
    public filteredOptions: Observable<string[]>;
    constructor(private service: ServicesService, private _fb: FormBuilder, private chRef: ChangeDetectorRef) {

    }
    
    ngOnInit() {

        //TEST AUTOCOMPLETE
        this.filteredOptions = this.myControl.valueChanges
        .pipe(
        startWith(null),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(val => 
           this.service.getAllGiros()
            .pipe(
            map(response =>response)
            )
        )
        );
        //TEST AUTOCOMPLETE
        this.service.getAllGiros().subscribe(val => {
            this.AllGiros = val;            
            //DATATABLE
            this.chRef.detectChanges();
            const table: any = $('#giroDatatable1').DataTable({
                "pagingType": "numbers",
                "autoWidth": false,
                "columnDefs": [
                    { "width": "20%", "targets": 1 }
                ],
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
                    searchPlaceholder: "Buscar Giros",
                }
            });
            this.dataTable = table.DataTable();
        }, error => { console.log(error) });
        //
       
        //
        this.userForm = this._fb.group({
            nombre_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            razon_social_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            tamano_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            calle_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            descripcion_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            numero_calle_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            ciudad_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            encargado_contacto_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            fono_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
            mail_empresa: ['', [<any>Validators.required, <any>Validators.minLength(1)]]
        });

        this.service.getDataEmpresaId(sessionStorage.getItem('id')).subscribe(val => {
            console.log(val);
            if (val != null) {
                const empresa = {
                    nombre_empresa: val[0].nombre_empresa,
                    razon_social_empresa: val[0].razon_social_empresa,
                    tamano_empresa: val[0].tamaño_empresa,
                    calle_empresa: val[0].calle_empresa,
                    descripcion_empresa: val[0].descripcion_empresa,
                    numero_calle_empresa: val[0].numero_calle_empresa,
                    ciudad_empresa: val[0].ciudad_empresa,
                    encargado_contacto_empresa: val[0].encargado_contacto_empresa,
                    fono_empresa: val[0].fono_empresa,
                    mail_empresa: val[0].mail_empresa
                };
                console.log(empresa);
                (<FormGroup>this.userForm)
                    .setValue(empresa, { onlySelf: true });
            }
            else {
                console.log("error");
            }

        });



        this.service.getGirosEmpresasConData(sessionStorage.getItem('id')).subscribe(val => {
            this.DataGiros = val;
        },
            error => {
                console.log(error
                )
            });
    }

    private _filter(value: string): string[] {
        this.service.getAllGiros().subscribe(val => {
            this.AllGiros = val;
            //TEST AUTOCOMPLETE
            var dataAutocomplete = [];
            for (var i = 0; i < val.length; i++) {
                dataAutocomplete.push(val[i].nombre_giro);
                this.options = dataAutocomplete;
            }
        });

        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    save(model: dataEmpresaModal, isValid: boolean) {
        this.submitted = true;

    }

}
