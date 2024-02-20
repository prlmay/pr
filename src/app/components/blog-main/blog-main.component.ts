import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-main',
  standalone: true,
  imports: [NgFor],
  templateUrl: './blog-main.component.html',
  styleUrl: './blog-main.component.css'
})
export class BlogMainComponent {
  image: any[] = [
    {
      id: 1,
      image: '../../../assets/images/image2/img1.png',
      post: [
        {
          id: 1,
          link: 'Startup',
          title: 'Design tips for designers that cover everything you need',
          text: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
      ]
    },
    {
      id: 2,
      image: '../../../assets/images/image2/img2.png',
      post: [
        {
          id: 2,
          link: 'BUSINESS',
          title: 'How to build rapport with your web design clients',
          text: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
      ]
    },
    {
      id: 3,
      image: '../../../assets/images/image2/img3.png',
      post: [
        {
          id: 3,
          link: 'Startup',
          title: 'Logo design trends to avoid in 2022',
          text: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
      ]
    },
    {
      id: 4,
      image: '../../../assets/images/image2/img4.png',
      post: [
        {
          id: 4,
          link: 'TECHNOLOGY',
          title: '8 Figma design systems you can download for free today',
          text: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        }
      ]
    }
  ];
}
