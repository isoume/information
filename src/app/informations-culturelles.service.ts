import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationsCulturellesService {

  currently: any;
  private key = '';
  private url = '';
  constructor(private port: HttpClient) { }

  gettingData() {
    return this.port.get('');
  }
}
