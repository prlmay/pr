import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-post-main',
  standalone: true,
  imports: [RouterModule,NgFor],
  templateUrl: './blog-post-main.component.html',
  styleUrl: './blog-post-main.component.css'
})
export class BlogPostMainComponent {

}
