import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminLoginComponent } from './admin-login.component';

// import { AuthorLoginComponent } from './author-login.component';

@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule
  ]
})
export class AdminLoginModule { }
