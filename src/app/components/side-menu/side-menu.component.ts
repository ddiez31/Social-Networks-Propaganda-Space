import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  constructor() { }

  ngOnInit() {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  

}
