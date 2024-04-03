import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminLoginModule } from '../pages/admin-login/admin-login.module';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,AdminLoginModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
