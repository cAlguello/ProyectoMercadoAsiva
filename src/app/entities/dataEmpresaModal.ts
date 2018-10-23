import { Observable } from 'rxjs/Observable';

export class dataEmpresaModal {
    constructor(
        public id_empresa: any,
        public nombre_empresa: any,
        public descripcion_empresa: any,
        public calle_empresa: any,
        public numero_calle_empresa: any,
        public ciudad_empresa: any,
        public encargado_contacto_empresa: any,
        public productos_empresa: Observable<any>,
        public giros_empresa: Observable<any>,
        public fono_empresa: any,       
        public mail_empresa:any,
        public id_giro: any,
        public nombre_giro: any,       
        public id_area_giro: any,     
        public nombre_area_giro: any                
    ) { }
  }
