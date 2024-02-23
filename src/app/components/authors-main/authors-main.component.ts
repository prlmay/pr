import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorPosts } from '../../models/author-posts';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-authors-main',
  standalone: true,
  imports: [RouterLink,NgFor,RouterModule],
  templateUrl: './authors-main.component.html',
  styleUrl: './authors-main.component.css'
})
export class AuthorsMainComponent {
  posts: AuthorPosts[] = [
    {
      id: 1,
      image: '../../../assets/images/image6/img1.png',
      title: 'BUSINESS',
      description: ' Font sizes in UI design: The complete guide to follow',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      image: '../../../assets/images/image6/img2.png',
      title: 'ECONOMY',
      description: 'How to build rapport with your web design clients',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]
}
