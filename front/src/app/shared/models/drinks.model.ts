import {Deserializable} from './deserializable.model';

export class Drinks implements Deserializable {
  drinks: [{
    strDrink: string;
    strDrinkThumb: string;
    idDrink: number;
  }];

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
