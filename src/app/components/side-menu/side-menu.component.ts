import { Component, Inject, OnInit } from '@angular/core';
import { Menu } from './shared/menu';
import { SideMenuService } from './shared/side-menu.service';
import { DOCUMENT } from '@angular/common';
import { PageScrollService, EasingLogic } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menus: Menu[];

  myEasing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  constructor(
    public sideMenuService: SideMenuService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any) { 
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.menus = this.sideMenuService.loadMenu();
  }

  scrollToTarget(target: string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: target,
      scrollOffset: 64,
      easingLogic: this.myEasing
    });
  }

 

}
