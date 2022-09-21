import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  myHero!: Hero;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.myHero = {
      id: parseInt(form.value.id),
      name: form.value.name,
      description: form.value.description,
    };

    console.log(this.myHero);
  }

  onClear(form: NgForm) {
    form.resetForm();
  }
}
