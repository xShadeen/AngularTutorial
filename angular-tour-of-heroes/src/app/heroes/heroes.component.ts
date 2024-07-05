import { HeroService } from './../hero.service';
import { Component, OnInit} from '@angular/core';
import {CommonModule, NgFor, NgIf} from '@angular/common'
import { Hero } from '../hero';
import {FormsModule} from '@angular/forms'
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService} from '../message.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, 
    private messageService: MessageService){}

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes=> this.heroes = heroes)
  }

}
