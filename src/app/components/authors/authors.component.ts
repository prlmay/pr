import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';import { NgFor, NgIf } from '@angular/common';
import { Social } from '../../models/social';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgFor, RouterModule, NgIf],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit{
  authors: Users[] = [];
  toggle: boolean  = true
  constructor(public request: RequestService) { 
                
  }
              


  ngOnInit(): void {
    this.getData();
    // this.userId = this.route.snapshot.params['id'];
    
  }
  getData () {
    this.request.getData<Users[]>(environment.homeAuthors.get).subscribe((item) => {
      this.authors = item;
    }, (e) => {
      console.log('error');
      console.log(e);
    })
  }  
  soc: Social[] = [
   {
    id: 1,
    facebook: '../../../assets/images/image1/facebook.png',
    twitter: '../../../assets/images/image1/twitter.png',
    instagram: '../../../assets/images/image1/instagram.png',
    linkedin: '../../../assets/images/image1/linkedin.png'
   }
  ]
}
