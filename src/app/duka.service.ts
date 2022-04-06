import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DukaService {

  constructor(private http:HttpClient) { }
  getproducts():Observable<any>{
    return this.http.get<any>('assets/db.json')
  }

}
