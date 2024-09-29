import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl= "https://random-person-generator.com/api";

  constructor(private http: HttpClient) { }

  //devolviendo observable
  getAllPerson(): Observable<any>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
