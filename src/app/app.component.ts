import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Menu } from './menu';
import { Pipe, PipeTransform } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MatSidenav } from '@angular/material';

@Pipe({name: 'formatString'})
export class FormatStringPipe implements PipeTransform {
    transform(): string {
        return '-';
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0%, 0, 0)'
      })),
      state('out', style({
        width: '20rem',
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms linear')),
      transition('out => in', animate('400ms linear'))
    ]),
  ]
})

export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  title = 'Social-Networks-Propaganda-Space';
  menus: Menu[];
  menuState: string = 'in';
  menuSubTitleIsVisible: boolean = false;

  constructor() {    
  }

  ngOnInit(): void {
    this.menus = [
      {
        title: 'Intro'
      },
      {
        number: 'I',
        title: 'En quoi l\'utilisation des réseaux sociaux est un avantage pour faire de la propagande?',
        subTitle: [
          'Les informations sont rapidement diffusées',
          'Fake news',
          'Encadrement insuffisant des lois',
        ]
      },
      {
        number: 'II',
        title: 'Qu\'est-ce-qui freine cette propagande?',
        subTitle: [
          '',
          'Concurrence',
          'L\'efficacité est-elle durable?',
        ]
      },
      {
        title: 'Conclusion'
      },     
    ];

  }
  
  toggleMenuOut() {
    this.menuState = 'out';
    setTimeout(() => {
      this.menuSubTitleIsVisible = !this.menuSubTitleIsVisible;
    }, 100);
  }
  
  toggleMenuIn() {
    this.menuState = 'in';
    this.menuSubTitleIsVisible = !this.menuSubTitleIsVisible;
  }

}
