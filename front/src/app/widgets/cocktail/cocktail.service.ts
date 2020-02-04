import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Drinks} from '../../shared/models/drinks.model';
import {Cocktail} from '../../shared/models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  drinks: Drinks;
  cocktail: Cocktail;

  constructor(private httpClient : HttpClient)
  {

  }

  async getDrinks(search: string): Promise<Drinks> {
    let object;
    if (search === "") {
      object = await this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail').toPromise();
    }
    else {
      object = await this.httpClient.get(' https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search).toPromise();
    }
    this.drinks = await new Drinks().deserialize(object);
    return this.drinks;
  }

  async getCocktail(drinkId: number): Promise<Cocktail> {

    let object = await this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drinkId).toPromise();
    this.cocktail = await new Cocktail().deserialize(object["drinks"][0]);
    return this.cocktail;
  }
}
