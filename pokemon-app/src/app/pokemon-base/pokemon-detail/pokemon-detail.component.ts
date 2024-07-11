import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit{
  @Input()
  pokemonDetail!: Pokemon

  @Input()
  pokemonName!: String

  @Output()
  remove: EventEmitter<any> = new EventEmitter()

  constructor(){}


  ngOnInit(): void {

  }
  
  onRemove(){
    this.remove.emit(this.pokemonDetail)
  }
}
