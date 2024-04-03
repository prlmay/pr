import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input('id') scroll!: string;
  form!: FormGroup
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      email: ['', [Validators.pattern(/^[0-9A-Za-z\.\-]{2,}@[a-zA-Z0-9]{2,15}\.[a-zA-Z]{2,4}$/)]],
    });
  }
  submit(){
    this.form.disable()
  }
}
