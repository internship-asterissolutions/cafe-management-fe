import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  ageFormControl = new FormControl(0, [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);
  id: number;
  user: any;
  addressFormControlss
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.id) {
      this.getUserById(this.id);
    }
  }




  ngOnInit(): void {
    this.setFromData();
  }
  setFromData() {
    if(this.id)
      {
        this.addressFormControlss = this.user?.name
        this.nameFormControl.setValue(this.user?.name);
        this.emailFormControl.setValue(this.user?.emailid);
        this.phoneFormControl.setValue(this.user?.phone_no);
        this.ageFormControl.setValue(this.user?.age);
        this.addressFormControl.setValue(this.user?.address);
      }

  }

  onSubmit() {
    const c = new User();

    c.name = this.nameFormControl.value;
    c.emailid = this.emailFormControl.value;
    c.phone_no = this.phoneFormControl.value;
    c.age = this.ageFormControl.value;
    c.address = this.addressFormControl.value;
    this.userService.createUser(c).subscribe((data) => {
      console.log(data);
    });
  }

  getUserById(id) {
    this.userService.GetUserById(id).subscribe((responseUser) => {
      this.user = responseUser;
      this.setFromData();
    });
  }

  onUpdate() {
    const u = new User();
    u.id = this.id;
    u.name = this.nameFormControl.value;
    u.emailid = this.emailFormControl.value;
    u.phone_no = this.phoneFormControl.value;
    u.age = this.ageFormControl.value;
    u.address = this.addressFormControl.value;


    this.userService.updateUser(u).subscribe((res) => {
      console.log('delete success');
    });
  }
}
