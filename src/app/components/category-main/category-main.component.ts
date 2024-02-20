import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryPost } from '../../models/catagory-post';
import { Categories } from '../../models/categories';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-main',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './category-main.component.html',
  styleUrl: './category-main.component.css'
})
export class CategoryMainComponent {
  catPost: CategoryPost[] = [
    {
      id: 1,
      image: '../../../assets/images/image5/image1.png',
      description: {
          name: 'Business',
          title: 'Top 6 free website mockup tools 2022',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
        
      }
    },
    {
      id: 2,
      image: '../../../assets/images/image5/image1.png',
      description: {
          name: 'Business',
          title: 'Step-by-step guide to choosing great font pairs',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
        
      }
    },
    {
      id: 3,
      image: '../../../assets/images/image5/image1.png',
      description: {
          name: 'Business',
          title: 'Ten free foogle fonts that you should use',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
        
      }
    },
    {
      id: 4,
      image: '../../../assets/images/image5/image1.png',
      description: {
          name: 'Business',
          title: 'What did I learn from doing 50+ design sprints?',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
        
      }
    }
  ];
  categories: Categories[] = [
    {
      id: 1,
      description: {
        image: '../../../assets/images/image5/shuttle.png',
        name: 'Startup'
      }
    },
    {
      id: 2,
      description: {
        image: '../../../assets/images/image5/business-and-trade1.png',
        name: 'Business'
      }
    },
    {
      id: 3,
      description: {
        image: '../../../assets/images/image5/economy(1).png',
        name: 'Economy'
      }
    },
    {
      id: 4,
      description: {
        image: '../../../assets/images/image5/cyborg.png',
        name: 'Technology'
      }
    }
  ]

}
