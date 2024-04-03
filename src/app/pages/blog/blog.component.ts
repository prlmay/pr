import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../services/request.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from '../../../environments/environment';
import { BlogMain } from '../../models/blog-main';
import { CategoryPost } from '../../models/catagory-post';
import { JoinComponent } from '../../components/join/join.component';
import { CatagoryComponent } from '../../components/catagory/catagory.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatPaginatorModule,
    NgxPaginationModule,
    JoinComponent,
    CatagoryComponent  
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  posts: BlogMain[] = [];
  Category: CategoryPost[] = []
  featuredPost!: BlogMain;
  p: number = 1;
  itemsPerPage: number = 5

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.LoadBlogAllPosts();
    this.LoadCategory();
    this.checkScreenWidth()
  }

  LoadBlogAllPosts() {
    this.request.getData<BlogMain[]>(`${environment.blogMain.get}`).subscribe((data) => {
      this.posts = data;
    }, (e) => {
      console.log(e);
    })
    this.request.getData<BlogMain>(`${environment.blogMain.get}/9`).subscribe((featuredPost) => {
      this.featuredPost = featuredPost;
    }, (e) => {
      console.log(e);
    })
  }
  LoadCategory() {
    this.request.getData<CategoryPost[]>(environment.catagory.get).subscribe((data) => {
      this.Category = data;
    }, (e) => {
      console.log(e);
    })
  }

  checkScreenWidth() {
    if (window.innerWidth <= 800) {
      this.itemsPerPage = 1;
    }else{
      this.itemsPerPage = 5
    }
  }
}
