import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/studentlist/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://127.0.0.1:8000/api/students/1";

  constructor(private http: HttpClient) { }

  sendGetRequest(): Observable<Array<Student>> {
    
    var test = this.http.get<Array<Student>>(this.url);
    console.log("teeeeeeest:\n");
    console.log(test);
    return test;
  }
}
