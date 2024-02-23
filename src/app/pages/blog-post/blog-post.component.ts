import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPostHeaderComponent } from '../../components/blog-post-header/blog-post-header.component';
import { BlogPostMainComponent } from '../../components/blog-post-main/blog-post-main.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterModule, BlogPostHeaderComponent, BlogPostMainComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

}
