import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPostHeader } from '../../models/bl-post-header';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog-post-header',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './blog-post-header.component.html',
  styleUrl: './blog-post-header.component.css'
})
export class BlogPostHeaderComponent {
  constructor(public request: RequestService) { }

  header: BlogPostHeader[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData () {
    this.request.getData<BlogPostHeader[]>(environment.blogPostHeader.get).subscribe((item) => {
      this.header = item;
    }, (e) => {
      console.log('error');
      console.log(e);
    })
  } 

}
