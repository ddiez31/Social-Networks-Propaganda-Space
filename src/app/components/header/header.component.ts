import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Réseaux sociaux: un nouvel espace de propagande?'

  constructor() { }

  ngOnInit() {
  }

}
