import { Component, OnInit } from '@angular/core';
import { CategoryPost } from '../../models/catagory-post';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './startup.component.html',
  styleUrl: './startup.component.css'
})
export class StartupComponent  implements OnInit{
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
