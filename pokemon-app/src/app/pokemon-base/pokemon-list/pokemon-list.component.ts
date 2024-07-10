import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../_services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  title!: String
  pokemons!: Pokemon[]
  type: String = 'all'
  reference!: String

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.title = "Welcome to Pokemon-app!"
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      this.pokemons = data
    })
  }

  handleClick(value: any){
    console.log(value)
    this.reference = value
  }
}
