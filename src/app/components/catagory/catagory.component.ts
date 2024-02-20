import { Component, ElementRef, ViewChild } from '@angular/core';
import { Catagory } from '../../models/catagory';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catagory',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.css'
})
export class CatagoryComponent {
  // @ViewChild('sec') sec!: ElementRef
  // showTitle(){
  //   this.sec
  // }
  catagory: Catagory[] =[
    {
      id: 1,
      image: '../../../assets/images/image1/Icon3.png',
      title:  'Business',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: 2,
      image: '../../../assets/images/image1/shuttle.png',
      title:  'Startup',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: 3,
      image: '../../../assets/images/image1/economy3.png',
      title:  'Economy',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: 4,
      image: '../../../assets/images/image1/cyborg.png',
      title:  'Technology',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    }
  ]
  
}
