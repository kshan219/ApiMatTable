import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../userdata-interface';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {

  // baseURL = "https://randomuser.me/api/?page=3&results=10&seed=abc"

  constructor(private http: HttpClient) { }

  getUsers(currentPage: number, sizeOfPages: number): Observable<UserData> {
    return this.http.get<UserData>(`https://randomuser.me/api/?page=${currentPage}&results=${sizeOfPages}&seed=abc`);
  }
}