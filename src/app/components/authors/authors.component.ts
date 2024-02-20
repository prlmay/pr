import { Component } from '@angular/core';
import { Users } from '../../models/users';import { NgFor } from '@angular/common';
import { Social } from '../../models/social';
;

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgFor],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authors: Users[] = [
    {
      id: 1,
      image: '../../../assets/images/image1/img4-1.png',
      name: 'Floyd Miles',
      position: 'Content Writer _Company'
    },
    {
      id: 2,
      image: '../../../assets/images/image1/img4-2.png',
      name: 'Dianne Russell',
      position: 'Content Writer _Company'
    },
    {
      id: 3,
      image: '../../../assets/images/image1/img4-3.png',
      name: 'Jenny Wilson',
      position: 'Content Writer _Company'
    },
    {
      id: 4,
      image: '../../../assets/images/image1/img4-4.png',
      name: 'Leslie Alexander',
      position: 'Content Writer _Company'
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
