import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../studentlist/student'
import { DataService } from '../data.service';
declare const getStudentList: any;

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
  })

export class StudentlistComponent implements OnInit {
  
  getList() {
    getStudentList();
  }

  // students: Array <Student> = [];
  // private url = "http://127.0.0.1:8000/api/students";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.sendGetRequest().subscribe(res => {
    //   this.students = res;
    // });

    // this.http.get(this.url).subscribe((data: any)=>{
    //   console.log(data);
    //   this.student = data;
    // })  
  }

}