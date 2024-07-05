import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:7130/api/';

  getUsers() {
    return this.http.get(this.baseUrl + 'UserControllor/GetUser');
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl + 'UserControllor/saveUser', user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + 'UserControllor/Update', user);
  }
  deleteUser(id) {
    return this.http.delete(this.baseUrl + `UserControllor/Delete?id=${id}`);
  }
  GetUserById(id) {
    return this.http.get(this.baseUrl + `UserControllor/GetUserById?id=${id}`);
  }
}
