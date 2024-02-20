import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryMainComponent } from '../../components/category-main/category-main.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule, CategoryMainComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}
