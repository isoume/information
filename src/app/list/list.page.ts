import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'wifi',
    'basketball',
    'paper-plane',
    'boat'
  ];

  private activities = [
    'Le monde',
    'La finance',
    'La culture',
    'le sport'
  ];
  private descriptions = [
    '',
    '',
    '',
    ''
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router) {
    for (let i = 0; i < 4; i++) {
      this.items.push({
        title: this.activities[i],
        note:  this.descriptions[i],
        icon:  this.icons[i]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  voirInformation(conserned) {
    if(conserned== 'Le monde'){
      
      this.router.navigate(['mondiales']);
    }
    else
    if(conserned == 'La finance'){
      this.router.navigate(['financieres']);
    }
    else
    if(conserned== 'La culture'){
      this.router.navigate(['culturelles']);
    }
    
  }
}
