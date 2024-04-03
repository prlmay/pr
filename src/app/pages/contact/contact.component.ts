import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form!: FormGroup
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.pattern(/^[0-9A-Za-z\.\-]{2,}@[a-zA-Z0-9]{2,15}\.[a-zA-Z]{2,4}$/)]],
    });
  }
  submit(){
    this.form.disable()
  }
}
