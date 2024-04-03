import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthorsHeaderComponent } from '../../components/authors-header/authors-header.component';
import { AuthorsMainComponent } from '../../components/authors-main/authors-main.component';
import { Router } from 'express';
import { Users } from '../../models/users';
import { environment } from '../../../environments/environment';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [RouterModule,AuthorsHeaderComponent, AuthorsMainComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit {
  id!: string
  user!: Users
  constructor(public request: RequestService,
              private activeRoute: ActivatedRoute){ 
              this.id = this.activeRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.request.getData<Users>(`${environment.users.get}/${this.id}`).subscribe((item) => {
        this.user = item;
    })
  }
}
