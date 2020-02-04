import {Deserializable} from './deserializable.model';

export class Movies implements Deserializable {
  results: [{
      popularity: number
      poster_path: string
      title: string
      vote_average: number
    }];

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
