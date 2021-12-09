import { Component, OnInit } from '@angular/core';

import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: any;

  constructor(
    public teachersService: TeachersService
  ) { }

  ngOnInit() {
    this.teachersService.getTeachers().subscribe(response => {
      this.teachers = response;
      console.log(response)
    });
  }

}
