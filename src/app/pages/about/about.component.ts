import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import { AboutMainComponent } from '../../components/about-main/about-main.component';
import { JoinComponent } from '../../components/join/join.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, AboutMainComponent,JoinComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
}
