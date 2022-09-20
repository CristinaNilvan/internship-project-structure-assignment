import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/hero.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css'],
})
export class HeroesTableComponent implements OnInit, AfterViewInit {
  heroes: Hero[] = [];
  displayedColumns = ['id', 'name'];
  dataSource!: MatTableDataSource<Hero>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.dataSource = new MatTableDataSource<Hero>(this.heroes);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
