import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthorPosts } from '../../models/author-posts';
import { RouterLink, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-authors-main',
  standalone: true,
  imports: [RouterLink,NgFor,RouterModule],
  templateUrl: './authors-main.component.html',
  styleUrl: './authors-main.component.css'
})
export class AuthorsMainComponent implements OnInit{
  constructor(public request: RequestService) { }

  posts: AuthorPosts[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData () {
    this.request.getData<AuthorPosts[]>(environment.authorPosts.get).subscribe((item) => {
      this.posts = item;
    }, (e) => {
      console.log('error');
      console.log(e);
    })
  } 
}
