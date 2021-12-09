import { Component, OnInit } from '@angular/core';

import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

  students: any;

  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(response => {
      this.students = response;
      console.log(response)
    });
  }

}
