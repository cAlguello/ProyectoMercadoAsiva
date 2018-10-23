import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientJsonpModule, HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import { ResponseContentType } from '@angular/http';
import { BrowserXhr } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  public header: any;
  public host: any;
  isLoggedin: boolean;
  ticket = "2789F8F4-C9C3-4DA8-9DA2-1EF5A5A40F79"; //ticket de chilecompra para uso de la API


  //headers = new Headers({ 'Content-Type': 'application/json' });  
  //options = new RequestOptions({ headers: this.headers });

  constructor(private httpClient: HttpClient, private http: Http) {
    this.host = 'http://127.0.0.1:9000';
    //this.host = 'http://apiasiva.hopto.org:9000';
    this.header = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "post" });
  }

  isAuthenticated() {
    let token = sessionStorage.getItem('id');
    if (token) {
      return true;
    }
    return false;
  }
//SEARCH SERVICE TEST

//FIN SEARCH SERVICE TEST
  //Services Chilecompra
  //TEST CHILECOMPRA

  getEmpresaChileCompra(rut): Observable<any> {
    return this.http.get('http://api.mercadopublico.cl/servicios/v1/Publico/Empresas/BuscarProveedor?rutempresaproveedor=' + rut + '&ticket=' + this.ticket)
      .map((res: Response) => res.json())
  }

  getOrdenesDeCompraChileCompra(empresa): Observable<any> {
    return this.http.get('http://api.mercadopublico.cl/servicios/v1/publico/ordenesdecompra.json?fecha=01012018&CodigoProveedor=' + empresa + '&ticket=' + 'F8537A18-6766-4DEF-9E59-426B4FEE2844')
      .map((res: Response) => res.json())
  }

  getDetalleOrdenDeCompraChileCompra(orden): Observable<any> {
    return this.http.get('http://api.mercadopublico.cl/servicios/v1/publico/ordenesdecompra.json?codigo=' + orden + '&ticket=' + this.ticket)
      .map((res: Response) => res.json())
  }

  //Services Usuarios
  getUser(user): Observable<any> {
    //console.log(this.host+'/authController/'+user)
    return this.http.get(this.host + '/userController/' + user)
      .map((res: Response) => res.json())
  }
  //Services Giros
  getAllGiros(): Observable<any> {
    return this.http.get(this.host + "/giroController/verDatos")
      .map((res: Response) => res.json())
  }
  //Services Productos
  getAllProductos(): Observable<any> {
    return this.http.get(this.host + "/productoController/verDatos")
      .map((res: Response) => res.json())
  }
  //Services Empresas
  getDataEmpresaId(id): Observable<any> {
    return this.http.get(this.host + "/empresaController/empresaId/" + id)
      .map((res: Response) => res.json())
  }


  getEmpresasActivas(): Observable<any> {
    return this.http.get(this.host + "/empresaController/empresaActiva")
      .map((res: Response) => res.json())
  }
  getEmpresasInactivas(): Observable<any> {
    return this.http.get(this.host + "/empresaController/empresaInactiva")
      .map((res: Response) => res.json())
  }


  getAllEmpresasConData(): Observable<any> {
    return this.http.get(this.host + "/empresaController/empresasConData")
      .map((res: Response) => res.json())
  }

  getProductosEmpresasConData(id): Observable<any> {
    return this.http.get(this.host + "/empresaController/productosEmpresa/" + id)
      .map((res: Response) => res.json())
  }

  getGirosEmpresasConData(id): Observable<any> {
    return this.http.get(this.host + "/empresaController/girosEmpresa/" + id)
      .map((res: Response) => res.json())
  }

  //Services Buscador Login
  searchProductoLogin(producto): Observable<any> {
    return this.http.get(this.host + "/buscadorController/buscaProductosLogin/" + producto)
      .map((res: Response) => res.json())
  }

  busquedasProductoUnico(producto): Observable<any> {
    return this.http.get(this.host + "/buscadorController/logBusquedasProducto/" + producto)
      .map((res: Response) => res.json())
  }
  //Services Logs
  addLogBusqueda(producto): Observable<any> {
    return this.http.get(this.host + "/logsController/addProductoLog/" + producto)
      .map((res: Response) => res.json())
  }

  addLogEmpresa(empresa): Observable<any> {
    return this.httpClient.post(this.host + "/logsController/addEmpresaLog", empresa, this.header);
  }

  getCantidadLogEmpresa(id): Observable<any> {
    return this.http.get(this.host + "/generalStatsController/cantidadLogEmpresas/" + id)
      .map((res: Response) => res.json())
  }





  //Services Buscador Sin Login
  searchProductoSinLogin(producto): Observable<any> {
    return this.http.get(this.host + "/buscadorController/buscaProductosNoLogin/" + producto)
      .map((res: Response) => res.json())
  }
  //Services Consultas
  addConsulta(consulta): Observable<any> {
    return this.httpClient.post(this.host + "/consultaController", consulta, this.header);
  }

  getConsultasRecibidas(id): Observable<any> {
    return this.http.get(this.host + "/consultaController/ConsultasRecibidas/" + id)
      .map((res: Response) => res.json())
  }
  getConsultasRespondidas(id): Observable<any> {
    return this.http.get(this.host + "/consultaController/ConsultasRespondidas/" + id)
      .map((res: Response) => res.json())
  }



  //Services estadisticas generales
  getNumEmpresas(): Observable<any> {
    return this.http.get(this.host + "/generalStatsController/totalEmpresas")
      .map((res: Response) => res.json())
  }

  getNumProductos(): Observable<any> {
    return this.http.get(this.host + "/generalStatsController/totalProductos")
      .map((res: Response) => res.json())
  }

  getNumContactos(): Observable<any> {
    return this.http.get(this.host + "/generalStatsController/totalContactos")
      .map((res: Response) => res.json())
  }

  getProductosMasBuscadosGeneral() {
    return this.http.get(this.host + "/generalStatsController/productosMasBuscados")
      .map((res: Response) => res.json())
  }

}
