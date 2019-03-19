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
      section: 'Notre TPE porte sur la propagande sur les réseaux sociaux. On doit d\'abord définir les termes importants pour comprendre. Les réseaux sociaux désignent un site internet qui permet aux internautes de se créer une page personnelle afin de partager et d\'échanger des informations, des photos ou des vidéos avec leur réseau de connaissances. Quant à la propagande, elle est l\'ensemble des actions et des stratégies destinées à influencer voire à embrigader les pensées et les actes d\'une population. Nous sommes arrivées à nous demander si les réseaux sociaux étaient devenus un nouvel espace de propagande. Nous avons donc développé les avantages et les inconvénients pour le propagandiste d\'utiliser les réseaux sociaux.',
    },
    {
      number: 'I',
      title: 'En quoi l\'utilisation des réseaux sociaux est un avantage pour faire de la propagande?',
      image: './../../../assets/images/network-4025614_1280.jpg',
      subContent: [
        {
          number: '1.1',
          title: 'Les informations sont rapidement diffusées',
          subSection: [
            '4,1 milliards d\'internautes.',
            '3,3 milliards qui utilisent les réseaux sociaux.',
            'Les informations diffusées sur les réseaux sociaux touchent un très grand nombre de personnes.',
            'Cela représente un avantage car le propagandiste peut diffuser une idée gratuitement, rapidement et facilement sans que les utilisateurs aient à la chercher.',
            'Réseaux sociaux utilisés pour faire leur propagande que soit des personnalités publiques ou des partis politiques.',
            'Propagande durant les campagnes présidentielles notamment Donald Trump qui est le candidat qui utilisait le plus les réseaux sociaux.',
            'Gilets jaunes ont utilisé les réseaux sociaux pour développer leur mouvement social.'
          ]
        },
        {
          number: '1.2',
          title: 'Fake news',
          subSection: [
            'Ce sont des informations dont leur but est de tromper un auditoire et de profiter de certains avantages.',
            'Les articles de fake news emploient souvent des titres accrocheurs ou des informations entièrement fabriquées pour augmenter le nombre de lecteurs et de partages en ligne.',
            '75% des internautes disent avoir déjà été confrontés à une fake news.',
            'Un Français de moins de 35 ans sur deux, estime que l\'Éducation nationale devrait proposer des formations aux élèves pour les sensibiliser à la diffusion des fake news et donc réduire leur vulnérabilité.',  
            'Cela représente un avantage pour le propagandiste car il utilise les fake news facilement et arrive à convaincre les lecteurs de la véracité de l\'information.',
            'Les fake news ont été utilisées depuis des années comme lors de la guerre d\'Algérie.'
          ]
        },
        {
          number: '1.3',
          title: 'Encadrement insuffisant des lois',
          subSection: [
            'Nécessité de créer des lois pour encadrer les réseaux sociaux.',
            'Lois existantes restent applicables sur les réseaux sociaux.',
            'Création de lois contre les fake news et l\'usurpation d\'identité sur internet.',
            'Cela représente un avantage car cet encadrement n\'est pas suffisant. C\'est encore dur de repérer les comportements mauvais donc le propagandiste va pouvoir continuer son activité facilement.',
            'Nouvelles lois en France contre les fake news et la propagande surtout en période de campagnes présidentielles qui pourraient influencer le sort du scrutin.',
            'Propagande non encadrées par des lois durant la seconde guerre mondiale par exemple.'
          ]
        }
      ]
    },
    {
      number: 'II',
      title: 'Qu\'est-ce-qui freine cette propagande?',
      image: './../../../assets/images/IMG_2467.png',
      subContent: [
        {
          number: '2.1',
          title: 'Les risques de la communication',
          subSection: [
            'Utilisation des réseaux sociaux comporte des risques.',
            'Risques de bad buzz et de ternir sa réputation sur les réseaux sociaux et en dehors.',
            'Les politiciens doit faire attention à tout ce qu\'ils publient.',
            'Recherche d\'une image toujours plus positive.',
            'Effet streisand.',
            'Bad buzz existait avant les réseaux sociaux car il peut exister à la télévision ou dans les journaux.'
          ]
        },
        {
          number: '2.2',
          title: 'Concurrence',
          subSection: [
            'La concurrence c\'est la rivalité entre plusieurs personnes qui désirent la même chose, poursuivent le même but.',
            'En économie, la concurrence désigne la présence simultanée de plusieurs acteurs agissant de façon rivale sur un même marché.',
            'Les internautes risquent de se retrouver avec un flot d\'information différente et parfois contradictoire. Ils ne pourront donc pas croire en toutes les informations. Le propagandiste doit donc faire attention à cet avantage qui peut facilement se transformer en inconvénient pour lui.',
            'L\'utilisation de fake news est facile sur les réseaux sociaux, tout le monde peut donc s\'en servir facilement. L\'encadrement des lois reste également insuffisant, donc chaque internaute peut en profiter.',
            'La concurrence existe depuis très longtemps, on peut citer la concurrence entre la France et la Grande Bretagne durant l\'époque coloniale.'
          ]
        },
        {
          number: '2.3',
          title: 'L\'efficacité est-elle durable?',
          subSection: [
            'Efficacité durable = l\'action utile et stable qui est de nature à durer dans le temps.',
            'Propagandiste a du mal à voir les effets de sa propagande.',
            'Durée de vie différente selon la plate-forme utilisée.',
            'Obligation d\'être actif et régulier mais ce n\'est pas toujours facile pour certaines personnes.',
            'Durant la Première Guerre mondiale, les nations utilisaient des courriers aériens mais cette propagande n\'était pas efficace.'
          ]
        }
      ]
    },
    {
      // number: '3',
      title: 'Conclusion',
      section: 'Nous pouvons donc démontrer que les réseaux sociaux sont un nouvel espace de propagande. En effet, ils représentent un support attractif pour les utilisateurs qui souhaitent diffuser leurs idées et idéaux. Cette attractivité découle des avantages présents, tels que la rapidité de la diffusion des informations, les fake news et un encadrement insuffisant des lois. Néanmoins, des inconvénients persistent toujours pour le propagandiste. Dans ceux-ci, nous pouvons citer le risque de bad buzz, la concurrence facile et le fait que l\'efficacité ait un temps limité. Malgré eux, le propagandiste continu son activité sur les réseaux puisque les inconvénients sont moindre par rapport aux avantages. Les réseaux sociaux permettent de faire de la propagande mais rien de plus qui concrétisera ce qui a été fait sur les réseaux sociaux. On peut le voir avec l\'exemple des Gilets jaunes en France qui ont créé et organisé leur mouvement social sur les réseaux sociaux. Seulement, cette propagande sur les réseaux ne permet pas une structuration du mouvement, qui ne mène donc pas à l\'atteinte de leurs buts.',
    }

  ];


  constructor() { }

  loadContent(): Content[] {
    return this.contents;
  }

}
