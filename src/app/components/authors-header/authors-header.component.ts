import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Authors } from '../../models/authors';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-authors-header',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './authors-header.component.html',
  styleUrl: './authors-header.component.css'
})
export class AuthorsHeaderComponent {
  author: Authors[] =[
    {
      id: 1,
    image: '../../../assets/images/image6/header-img.png',
    description: 'Hey there, I’m Andrew Jonhson and welcome to my Blog',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
      social: {
        face: '../../../assets/images/image1/facebook.png',
        tw: '../../../assets/images/image1/twitter.png',
        insta: '../../../assets/images/image1/instagram.png',
        li: '../../../assets/images/image1/linkedin.png'
      }
    }
  ]
}
