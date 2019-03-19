import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationsMondialesService {

  private key = '&apiKey=cb61f5e046d7449dadec5c4c58e1c981';
  private country = 'fr';
  private url = 'https://newsapi.org/v2/top-headlines?country=';

  currently: any;

  constructor(private http: HttpClient) {

   }

  gettingData() {
    return this.http.get(this.url + this.country + this.key);
  }
}
