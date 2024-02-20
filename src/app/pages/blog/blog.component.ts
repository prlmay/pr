import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogHeaderComponent } from '../../components/blog-header/blog-header.component';
import { JoinComponent } from '../../components/join/join.component';
import { CatagoryComponent } from '../../components/catagory/catagory.component';
import { BlogMainComponent } from '../../components/blog-main/blog-main.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, BlogHeaderComponent,BlogMainComponent, CatagoryComponent, JoinComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent  {
  // title: string = 'All Catagories'
  // @ViewChild('catagory') catagory!: CatagoryComponent;
  // ngAfterViewInit(): void {
  //  this.catagory.sec = this.title  
   
  // }
}
