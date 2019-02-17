import { Component, OnInit } from '@angular/core';
import { Content } from './shared/content';
import { ContentService } from './shared/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contents: Content[];

  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    this.contents = this.contentService.loadContent();
  }

}


