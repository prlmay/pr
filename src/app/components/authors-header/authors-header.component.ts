import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Authors } from '../../models/authors';
import { RouterModule } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-authors-header',
  standalone: true,
  imports: [NgFor, RouterModule, NgIf],
  templateUrl: './authors-header.component.html',
  styleUrl: './authors-header.component.css'
})
export class AuthorsHeaderComponent  implements OnInit{
  toggle: boolean = true
  constructor(public request: RequestService) { }

  author: Authors[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData () {
    this.request.getData<Authors[]>(environment.authors.get).subscribe((item) => {
      this.author = item;
    }, (e) => {
      console.log('error');
      console.log(e);
    })
  }  
  // ngAfterViewInit(): void {
  //   this.toggle = false
  // }
}
