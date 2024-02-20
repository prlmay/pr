import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { HomeMainComponent } from '../../components/home-main/home-main.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,RouterOutlet,HomeHeaderComponent, HomeMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
