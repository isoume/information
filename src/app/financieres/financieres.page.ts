import { Component, OnInit } from '@angular/core';
import { InformationsFinancieresService } from '../informations-financieres.service';

@Component({
  selector: 'app-financieres',
  templateUrl: './financieres.page.html',
  styleUrls: ['./financieres.page.scss'],
})
export class FinancieresPage implements OnInit {

  donnees: any;
  constructor(private service: InformationsFinancieresService) { }

  ngOnInit() {
    this.service.gettingData().subscribe(
      data => {
        this.donnees = data;
        console.log(data);
      }
    );
  }


}
