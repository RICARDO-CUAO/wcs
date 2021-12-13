import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators }  from '@angular/forms';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})

export class RequestsComponent implements OnInit {

  public formRequests!: FormGroup;

  sexes = [
    { name: 'F' },
    { name: 'M' }
  ];
  
  firstName!: string;
  lastName!: string;
  yearOfBirth!: string;
  sex!: string;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formValidation();
  }

  formValidation() {
    this.formRequests = this.formBuilder.group({
      firstName: new FormControl("Nombre Requerido", [
        Validators.required
           
      ]),
      lastName: new FormControl("Apellido Requerido", [
        Validators.required
           
      ]),
      yearOfBirth: new FormControl("Fecha de Nacimiento Requerida", [
        Validators.required         
      ]),
      sex: new FormControl("Sexo Requerido", [
        Validators.required         
      ])
    })
  }

}
