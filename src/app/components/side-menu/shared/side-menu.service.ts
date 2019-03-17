import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  menus: Menu[] = [
    {
      title: 'Introduction'
    },
    {
      number: 'I',
      title: 'En quoi l\'utilisation des réseaux sociaux est un avantage pour faire de la propagande?',
      subTitle: [
        {
          number: '1.1',
          title: 'Les informations sont rapidement diffusées'
        },
        {
          number: '1.2',
          title: 'Fake news'
        },
        {
          number: '1.3',
          title: 'Encadrement insuffisant des lois'
        }
      ]
    },
    {
      number: 'II',
      title: 'Qu\'est-ce-qui freine cette propagande?',
      subTitle: [
        {
          number: '2.1',
          title: 'Les risques de la communication'
        },
        {
          number: '2.2',
          title: 'Concurrence'
        },
        {
          number: '2.3',
          title: 'L\'efficacité est-elle durable?'
        }
      ]
    },
    {
      title: 'Conclusion'
    },     
  ];


  constructor() { }

  loadMenu(): Menu[] {
    return this.menus;
  }



}
