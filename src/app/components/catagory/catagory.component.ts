import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Catagory } from '../../models/catagory';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-catagory',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.css'
})
export class CatagoryComponent implements OnInit {
  constructor(public request: RequestService) { }

  catagory: Catagory[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData () {
    this.request.getData<Catagory[]>(environment.catagory.get).subscribe((item) => {
      this.catagory = item;
    }, (e) => {
      console.log('error');
      console.log(e);
    })
  }  
}
