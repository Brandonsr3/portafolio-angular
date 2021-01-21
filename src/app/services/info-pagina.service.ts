import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info_pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any [] = [];
  constructor(private http: HttpClient) {

    //  console.log('Servicio de infoPagina listo');

    // leer Json
    this.cargarInfo();
    this.cargarEquipo();
  }

  // tslint:disable-next-line: typedef
  private cargarInfo(){
     // leer Json
     this.http.get('assets/data/data_pagina.json')
     .subscribe( (resp: InfoPagina) => {

       this.cargada = true;
       this.info = resp;
       // console.log(resp);
       // console.log( resp['twitter'] );
     });
    }
     // tslint:disable-next-line: typedef
     private cargarEquipo(){

      this.http.get('https://angular-html-a3bf9.firebaseio.com/equipo.json')
     .subscribe( (resp: any[]) => {

       this.equipo = resp;
       //console.log(resp);
       // console.log( resp['twitter'] );
     });
     }
}

