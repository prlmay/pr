import { Component, OnInit } from '@angular/core';
import { CatagoryComponent } from '../catagory/catagory.component';
import { AuthorsComponent } from '../authors/authors.component';
import { JoinComponent } from '../join/join.component';
import { HomePosts } from '../../models/home-posts';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [CatagoryComponent,AuthorsComponent, JoinComponent, NgFor, RouterLink],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css'
})
export class HomeMainComponent implements OnInit {
  constructor(public request: RequestService) { }

  posts: HomePosts[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData () {
    this.request.getData<HomePosts[]>(environment.homePosts.get).subscribe((item) => {
      this.posts = item;
    }, (e) => {
      console.log('error');
      console.log(e);
    })
  } 
}
