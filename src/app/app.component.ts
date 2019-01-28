import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Menu } from './menu';
import {Pipe, PipeTransform} from "@angular/core";


@Pipe({name: "formatString"})
export class FormatStringPipe implements PipeTransform {
    transform(): string {
        return '-';
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Social-Networks-Propaganda-Space';
  mode = new FormControl('over');

  menus: Menu[];

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
  

}
