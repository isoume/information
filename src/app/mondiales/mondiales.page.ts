import { Component, OnInit } from '@angular/core';
import { InformationsMondialesService } from '../informations-mondiales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mondiales',
  templateUrl: './mondiales.page.html',
  styleUrls: ['./mondiales.page.scss'],
})
export class MondialesPage implements OnInit {

  donnees: any;
  constructor(private info: InformationsMondialesService, private router: Router) { }

  ngOnInit() {
    this.info.gettingData().subscribe(
      data => {
        this.donnees = data;
        
      }
    );
  }

  description(article) {
    this.info.currently = article;
    this.router.navigate(['mondiale']);
  }

}
