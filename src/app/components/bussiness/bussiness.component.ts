import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryPost } from '../../models/catagory-post';
import { RouterLink } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-bussiness',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './bussiness.component.html',
  styleUrl: './bussiness.component.css'
})
export class BussinessComponent implements OnInit {
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
