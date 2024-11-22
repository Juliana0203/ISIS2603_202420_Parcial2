import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataTrainers } from '../dataTrainers'; 
import { Pokemon } from '../../pokemon/Pokemon';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {
  trainerDetail: any;
  pokemons: Pokemon[] = [];
  averagePokemons: number = 0;
  averageLevel: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const trainerId = this.route.snapshot.paramMap.get('id'); 
    if (trainerId) {
      this.trainerDetail = dataTrainers.find(trainer => trainer.id === Number(trainerId));
    }
  }

  calculateAverageSeasons() {
    const totalPokemons = this.pokemons.length;
    this.averagePokemons = totalPokemons;
  }

  calculateAverageLevel() {
    const totalLevel = this.pokemons.reduce((acc, pokemon) => acc + pokemon.level, 0);
    this.averageLevel = totalLevel/this.pokemons.length;
  }
}

