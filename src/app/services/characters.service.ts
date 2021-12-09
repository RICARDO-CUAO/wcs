import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CharactersService {

  baseurl = 'http://hp-api.herokuapp.com/api/characters/house/';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseurl + body).pipe(catchError(response => {
            reject(response);
            return of({});
          })
        ).subscribe((response: { [key: string]: any }) => {
          console.log(response)
            resolve(response);
        });
    });
  }
}