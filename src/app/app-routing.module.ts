import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesCardListComponent } from './angular-material-assignment/heroes-cards-list/heroes-cards-list.component';
import { HeroesTableComponent } from './angular-material-assignment/heroes-table/heroes-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-cards', component: HeroesCardListComponent },
  { path: 'heroes-table', component: HeroesTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
