import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserService } from './service/user.service';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { User } from './models/user';
import { Route, RouterModule, RouterOutlet } from '@angular/router';

export interface ICafeManagement {}

// const ELEMENT_DATA: ICafeManagement[] = [
//   {
//     id: 2,
//     name: 'Itishree Khadiratna',
//     emailid: 'Itsu@gmail.com',
//     phone_no: 9078,
//     age: 20,
//     address: 'BBSR',
//   },
// ];

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'emailid',
    'age',
    'address',
    'dactions',
    'uactions',
  ];
  dataSource: any;
user:any;
  constructor(private userService: UserService,private route:RouterOutlet) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUsers().subscribe((data) => {
      this.dataSource = data;
    });
  }

  deleteUser(element) {    
    this.userService.deleteUser(element.id).subscribe((res) => {
      console.log('delete success');
    });
  }




}
//UserService
