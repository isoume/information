import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationsFinancieresService {
  private key = '';
  private url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  currently: any;
  constructor(private http: HttpClient) { }

  gettingData() {
    return this.http.get(this.url + this.key);
  }
}
