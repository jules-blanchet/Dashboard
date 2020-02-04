import {Deserializable} from './deserializable.model';

export class Meteo implements Deserializable {
  city_name: string;
  temp: number;
  weather: {
    code: string;
  };

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
