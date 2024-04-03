import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatTableModule} from "@angular/material/table";
import { RequestService } from '../../services/request.service';
import { Users } from '../../models/users';
import { environment } from '../../../environments/environment';

export interface PeriodicElement {
  image: string;
  name: string;
  description: string;
  action: {del: string,edit: string};
}

const ELEMENT_DATA: PeriodicElement[] = [
  {image: '../../../assets/images/image4/img3.png', name: 'Floyd Miles', description: 'Content Writer @Company', action: {del: 'delete',edit: 'edit'}},
  {image: '../../../assets/images/image4/img4.png', name: 'Dianne Russell', description: 'Content Writer @Company', action: {del: 'delete',edit: 'edit'}},
  {image: '../../../assets/images/image4/img5.png', name: 'Jenny Wilson', description: 'Content Writer @Company', action: {del: 'delete',edit: 'edit'}},
  {image: '../../../assets/images/image4/img6.png', name: 'Leslie Alexander', description: 'Content Writer @Company', action: {del: 'delete',edit: 'edit'}},
  {image: '../../../assets/images/image4/img7.png', name: 'Guy Hawkins', description: 'Content Writer @Company', action: {del: 'delete',edit: 'edit'}},
  {image: '../../../assets/images/image4/img8.png', name: 'Eleanor Pena', description: 'Content Writer @Company', action: {del: 'delete',edit: 'edit'}},
  {image: '../../../assets/images/image4/img9.png', name: 'Robert Fox', description: 'Content Writer @Company', action:  {del: 'delete',edit: 'edit'}},
  {image: '../../../assets/images/image4/img10.png', name: 'Jacob Jones', description: 'Content Writer @Company', action: {del: 'delete',edit: 'edit'}},
];
@Component({
  selector: 'app-admin-authors',
  standalone: true,
  imports: [RouterModule, MatTableModule],
  templateUrl: './admin-authors.component.html',
  styleUrl: './admin-authors.component.css'
})
export class AdminAuthorsComponent  implements OnInit{
  @Input('data') data: any;
  displayedColumns: string[] = ['image', 'name', 'description', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(public request: RequestService) { }

  authors: Users[] = [];

  ngOnInit(): void {
    this.editUser();
  }

  editUser(){
    this.request.getData<Users[]>(environment.users.put).subscribe((item) => {
      this.authors = item;
    }, (e) => {
      console.log('error');
      console.log(e);
    })
  }
}
