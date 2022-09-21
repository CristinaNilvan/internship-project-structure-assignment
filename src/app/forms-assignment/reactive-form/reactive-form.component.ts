import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
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
      id: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          this.shouldBeGreaterThanZero,
        ],
      ],
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
    if (this.createHeroForm.status) {
      this.myHero = {
        id: parseInt(this.idValue),
        name: this.nameValue,
        description: this.descriptionValue,
      };
    }

    console.log(this.createHeroForm);
  }

  onClear() {
    this.createHeroForm.reset();
  }

  get id() {
    return this.createHeroForm.get('id');
  }

  get idValue() {
    return this.createHeroForm.get('id')?.value;
  }

  get nameValue() {
    return this.createHeroForm.get('name')?.value;
  }

  get descriptionValue() {
    return this.createHeroForm.get('description')?.value;
  }

  shouldBeGreaterThanZero(control: FormControl) {
    if (parseInt(control.value) === 0) return { isZero: true };
    else return null;
  }
}
