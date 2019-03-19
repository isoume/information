import { Component, OnInit } from '@angular/core';
import { InformationsMondialesService } from '../informations-mondiales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mondiale',
  templateUrl: './mondiale.page.html',
  styleUrls: ['./mondiale.page.scss'],
})
export class MondialePage implements OnInit {

  article: any;
  constructor(private service: InformationsMondialesService, private router: Router) { }

  ngOnInit() {
    this.article = this.service.currently;
  }

  retourner(){
    this.router.navigate(['mondiales']);
  }
}
