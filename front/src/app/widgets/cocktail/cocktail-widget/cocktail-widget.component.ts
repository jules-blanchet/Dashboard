import { Component, OnInit } from '@angular/core';
import {CocktailService} from '../cocktail.service';
import {Drinks} from '../../../shared/models/drinks.model';
import {Cocktail} from '../../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-widget',
  templateUrl: './cocktail-widget.component.html',
  styleUrls: ['./cocktail-widget.component.css']
})
export class CocktailWidgetComponent implements OnInit {
  drinks: Drinks;
  cocktail: Cocktail;
  search: string;

  async ngOnInit() {
    await this.getDrinks();
  }

  constructor(private cocktailService : CocktailService) {
    this.search = "";
    this.cocktail = null;
  }

  async getDrinks() {
    this.drinks = await this.cocktailService.getDrinks(this.search);
  }

  async updateCocktailSearch(event : any) {
    this.search = event.target.value;
    await this.getDrinks();
  }

  async getCocktail(idDrink: number) {
    this.cocktail = await this.cocktailService.getCocktail(idDrink);
  }
}
