import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroCardComponent } from './angular-material-assignment/hero-card/hero-card.component';
import { AngularMaterialModule } from './angular-material.module';
import { HeroesCardListComponent } from './angular-material-assignment/heroes-cards-list/heroes-cards-list.component';
import { HeroesTableComponent } from './angular-material-assignment/heroes-table/heroes-table.component';
import { NavbarComponent } from './angular-material-assignment/navbar/navbar.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './angular-material-assignment/sidenav-list/sidenav-list.component';
import { NavigationComponent } from './angular-material-assignment/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroCardComponent,
    HeroesCardListComponent,
    HeroesTableComponent,
    NavbarComponent,
    SidenavListComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
