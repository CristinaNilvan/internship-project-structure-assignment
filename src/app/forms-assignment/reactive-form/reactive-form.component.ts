import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  myHero!: Hero;
  createHeroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createHeroForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  onSubmit() {
    this.myHero = {
      id: parseInt(this.id),
      name: this.name,
      description: this.description,
    };

    console.log(this.myHero);
  }

  onClear() {
    this.createHeroForm.reset();
  }

  get id() {
    return this.createHeroForm.get('id')?.value;
  }

  get name() {
    return this.createHeroForm.get('name')?.value;
  }

  get description() {
    return this.createHeroForm.get('description')?.value;
  }
}
