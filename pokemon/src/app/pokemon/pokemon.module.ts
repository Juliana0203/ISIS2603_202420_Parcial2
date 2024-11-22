import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PokemonListComponent, PokemonDetailComponent],
  exports: [PokemonListComponent],
})
export class PokemonModule {}
