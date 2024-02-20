import { Component } from '@angular/core';
import { CatagoryComponent } from '../catagory/catagory.component';
import { AuthorsComponent } from '../authors/authors.component';
import { JoinComponent } from '../join/join.component';
import { HomePosts } from '../../models/home-posts';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [CatagoryComponent,AuthorsComponent, JoinComponent, NgFor, RouterLink],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css'
})
export class HomeMainComponent {
  posts: HomePosts[] = [
    {
      id: 1,
      author: 'John Deo',
      description: ' 8 Figma design systems that you can download for free today.'
    },
    {
      id: 2,
      author: 'John Deo',
      description: ' 8 Figma design systems that you can download for free today.'
    },
    {
      id: 3,
      author: 'John Deo',
      description: ' 8 Figma design systems that you can download for free today.'
    },
    {
      id: 4,
      author: 'John Deo',
      description: ' 8 Figma design systems that you can download for free today.'
    },
  ]
}
