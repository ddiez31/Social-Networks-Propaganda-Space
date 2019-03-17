import { Injectable } from '@angular/core';
import { Content } from './content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  contents: Content[] = [
    {
      // number: '0',
      title: 'Introduction',
      section: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.',
    },
    {
      number: 'I',
      title: 'En quoi l\'utilisation des réseaux sociaux est un avantage pour faire de la propagande?',
      section: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.',
      image: './../../../assets/images/social-media-1989152_1920.jpg',
      subContent: [
        {
          number: '1.1',
          title: 'Les informations sont rapidement diffusées',
          subSection: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.'
        },
        {
          number: '1.2',
          title: 'Fake news',
          subSection: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.'
        },
        {
          number: '1.3',
          title: 'Encadrement insuffisant des lois',
          subSection: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.'
        }
      ]
    },
    {
      number: 'II',
      title: 'Qu\'est-ce-qui freine cette propagande?',
      section: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.',
      image: './../../../assets/images/social-media-1989152_1920.jpg',
      subContent: [
        {
          number: '2.1',
          title: 'Les risques de la communication',
          subSection: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.'
        },
        {
          number: '2.2',
          title: 'Concurrence',
          subSection: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.'
        },
        {
          number: '2.3',
          title: 'L\'efficacité est-elle durable?',
          subSection: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.'
        }
      ]
    },
    {
      // number: '3',
      title: 'Conclusion',
      section: 'Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.',
    }

  ];


  constructor() { }

  loadContent(): Content[] {
    return this.contents;
  }

}
