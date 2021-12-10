import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators }  from '@angular/forms';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})

export class RequestsComponent implements OnInit {

  public formRequests!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formValidation();
  }

  formValidation() {
    this.formRequests = this.formBuilder.group({
      select: new FormControl("Seleccione un Valor", [
        Validators.required
      ])
    })
  }

}
