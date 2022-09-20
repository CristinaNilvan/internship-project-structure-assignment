import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesCardListComponent } from './heroes-cards-list.component';

describe('HeroesListComponent', () => {
  let component: HeroesCardListComponent;
  let fixture: ComponentFixture<HeroesCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
