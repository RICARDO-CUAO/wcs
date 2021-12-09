import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  baseurl = 'http://hp-api.herokuapp.com/api/characters/staff'

  constructor(
    private http: HttpClient
  ) { }

  getTeachers(): Observable<any>{
    return this.http.get(this.baseurl);
  }
  
}