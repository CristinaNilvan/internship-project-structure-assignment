import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './angular-material-assignment/hero-form/hero-form.component';
import { HeroesCardListComponent } from './angular-material-assignment/heroes-cards-list/heroes-cards-list.component';
import { HeroesTableComponent } from './angular-material-assignment/heroes-table/heroes-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormComponent } from './forms-assignment/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './forms-assignment/template-driven-form/template-driven-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-cards', component: HeroesCardListComponent },
  { path: 'heroes-table', component: HeroesTableComponent },
  // { path: 'create-hero', component: TemplateDrivenFormComponent },
  // { path: 'create-hero', component: ReactiveFormComponent },
  { path: 'create-hero', component: HeroFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
