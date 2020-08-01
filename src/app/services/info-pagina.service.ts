import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info_pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {

    //  console.log('Servicio de infoPagina listo');

    // leer Json
    this.http.get('assets/data/data_pagina.json')
        .subscribe( (resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;
          console.log(resp);
          // console.log( resp['twitter'] );
        });
  }
}
