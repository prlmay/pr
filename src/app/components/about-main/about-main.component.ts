import { Component } from '@angular/core';
import { Users } from '../../models/users';
import { Social } from '../../models/social';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-main',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.css'
})
export class AboutMainComponent {
  authors: Users[] = [
    {
      id: 1,
      image: '../../../assets/images/image4/img3.png',
      name: 'Floyd Miles',
      position: 'Content Writer @Company'
    },
    {
      id: 2,
      image: '../../../assets/images/image4/img4.png',
      name: 'Dianne Russell',
      position: 'Content Writer @Company'
    },
    {
      id: 3,
      image: '../../../assets/images/image4/img5.png',
      name: 'Jenny Wilson',
      position: 'Content Writer @Company'
    },
    {
      id: 4,
      image: '../../../assets/images/image4/img6.png',
      name: 'Leslie Alexander',
      position: 'Content Writer @Company'
    },
    {
      id: 5,
      image: '../../../assets/images/image4/img7.png',
      name: 'Guy Hawkins',
      position: 'Content Writer @Company'
    },
    {
      id: 6,
      image: '../../../assets/images/image4/img8.png',
      name: 'Eleanor Pena',
      position: 'Content Writer @Company'
    },
    {
      id: 7,
      image: '../../../assets/images/image4/img9.png',
      name: 'Robert Fox',
      position: 'Content Writer @Company'
    },
    {
      id: 8,
      image: '../../../assets/images/image4/img10.png',
      name: 'Jacob Jones',
      position: 'Content Writer @Company'
    }
  ];
  soc: Social[] = [
   {
    id: 1,
    facebook: '../../../assets/images/image1/facebook.png',
    twitter: '../../../assets/images/image1/twitter.png',
    instagram: '../../../assets/images/image1/instagram.png',
    linkedin: '../../../assets/images/image1/linkedin.png'
   }
  ]
}
