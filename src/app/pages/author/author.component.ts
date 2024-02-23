import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorsHeaderComponent } from '../../components/authors-header/authors-header.component';
import { AuthorsMainComponent } from '../../components/authors-main/authors-main.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [RouterModule,AuthorsHeaderComponent, AuthorsMainComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

}
