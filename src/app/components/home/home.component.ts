import { Component, Inject, OnInit } from '@angular/core';
import { Content } from './shared/content';
import { ContentService } from './shared/content.service';
import { DOCUMENT } from '@angular/common';
import { PageScrollService, EasingLogic } from 'ngx-page-scroll-core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contents: Content[];
  myEasing: EasingLogic;

  constructor(
    public contentService: ContentService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.myEasing = (t: number, b: number, c: number, d: number): number => {
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
   }

  ngOnInit(): void {
    this.getContent();
    const jumbotron = document.getElementById('jumbotron');
    const input = document.getElementById('jumbotron');
    const btn = document.getElementById('btn');
    const parallaxInstance = new Parallax(jumbotron, {
      relativeInput: true,
      hoverOnly: true,
      pointerEvents: true
    });
    // parallaxInstance.friction(0.2, 0.2);
  }


  getContent(): void {
    this.contents = this.contentService.loadContent();
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


