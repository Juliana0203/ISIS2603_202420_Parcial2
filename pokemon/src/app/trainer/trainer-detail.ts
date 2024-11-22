import { Pokemon } from "../pokemon/Pokemon";
import { Trainer } from "./Trainer";

export class TrainerDetail extends Trainer{

    constructor(
    id: number,
    name: string,
    age: number,
    imageUrl: string,
    smallSnopsies: string,
    bigSnopsies: string,
    pokemons: Array<Pokemon>
  ) {
    super(id, name, age, imageUrl, smallSnopsies, bigSnopsies,pokemons);
  }
}