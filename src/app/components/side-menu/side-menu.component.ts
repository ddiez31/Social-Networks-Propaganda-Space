import { Component, OnInit } from '@angular/core';
import { Menu } from './shared/menu';
import { SideMenuService } from './shared/side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menus: Menu[];

  constructor(public sideMenuService: SideMenuService) { 
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.menus = this.sideMenuService.loadMenu();
  }

 

}
