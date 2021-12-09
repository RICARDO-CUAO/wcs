import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseurl = 'http://hp-api.herokuapp.com/api/characters/students'

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<any>{
    return this.http.get<any>(this.baseurl);
  }
  
}
