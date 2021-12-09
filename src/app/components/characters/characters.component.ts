import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  public formCharacters!: FormGroup;
  
  public characters = [];

  houses = [
    { name: 'slytherin' },
    { name: 'gryffindor' },
    { name: 'ravenclaw' },
    { name: 'hufflepuff' },
  ];

  selected!: string;

  constructor(
    private charactersService: CharactersService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formValidation();
    console.log(this.formCharacters.value);
  }

  formValidation() {
    this.formCharacters = this.formBuilder.group({
      select: new FormControl("Seleccione un Valor", [
        Validators.required
      ])
    })
  }

  selectCharacters() {
    this.charactersService.getCharacters(this.formCharacters.value.select).then(response => {
      console.log(response);
      this.characters = response;
    });
  }
}