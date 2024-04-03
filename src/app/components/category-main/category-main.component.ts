import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryPost } from '../../models/catagory-post';
import { RouterLink, RouterModule } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-category-main',
  standalone: true,
  imports: [NgFor,RouterLink, RouterModule],
  templateUrl: './category-main.component.html',
  styleUrl: './category-main.component.css'
})
export class CategoryMainComponent implements OnInit {

  constructor(public request: RequestService) { }

  catPost: CategoryPost[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData () {
    this.request.getData<CategoryPost[]>(environment.categoryPost.get).subscribe((item) => {
      this.catPost = item;
    }, (e) => {
      console.log('error');
      console.log(e);
    })
  }
}
