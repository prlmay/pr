import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CategoryPost } from '../../models/catagory-post';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [NgFor,RouterModule,RouterLink],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent implements OnInit {
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
