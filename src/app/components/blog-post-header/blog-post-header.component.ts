import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPostHeader } from '../../models/bl-post-header';

@Component({
  selector: 'app-blog-post-header',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './blog-post-header.component.html',
  styleUrl: './blog-post-header.component.css'
})
export class BlogPostHeaderComponent {
  haeder: BlogPostHeader[] = [
    {
      id: 1,
      authorImage: '../../../assets/images/image3/header-img.png',
      authorName: ' Andrew Jonson',
      data: 'Posted on 27th January 2022',
      title: 'Step-by-step guide to choosing great font pairs',
      category: {
        name: 'Startup',
        image: '../../../assets/images/image3/shuttle.png'
      }
    }
  ]
}
