import { Injectable } from '@angular/core';
import { DISH } from '../components/dish/model/dish';
@Injectable({
  providedIn: 'root',
})
export class DishesService {
  dishes: DISH[] = [
    {
      id: 1,
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      ingredients: ['tomatoes', 'cheese', 'toppings'],
      origins: ['italy'],
      imageUrl: '/assets/images/dishes/food-1.jpg',
      favorite: true,
      stars: 4.2,
      steps: ['just cook it lol!'],
    },
    {
      id: 2,
      name: 'Meatball',
      ingredients: ['meat'],
      cookTime: '20-30',
      origins: ['persia', 'middle east', 'china'],
      imageUrl: '/assets/images/dishes/food-2.jpg',
      favorite: true,
      stars: 5,
      steps: ['just cook it lol!'],
    },
    {
      id: 3,
      name: 'Hamburger',
      ingredients: ['meat', 'cheese', 'letuce', 'sauces'],
      cookTime: '10-15',
      origins: ['germany', 'us'],
      imageUrl: '/assets/images/dishes/food-3.jpg',
      favorite: false,
      stars: 5,
      steps: ['just cook it lol!'],
    },
    {
      id: 4,
      name: 'Fried Potatoes',
      ingredients: ['potatoes'],
      cookTime: '15-20',
      origins: ['belgium', 'france'],
      imageUrl: '/assets/images/dishes/food-4.jpg',
      favorite: false,
      stars: 4.5,
      steps: ['just cook it lol!'],
    },
  ];
  constructor() {}
  getDishes() {
    return this.dishes;
  }
  getDishById(id: number): DISH {
    return this.getDishes().find((dish) => dish.id == id)!;
  }
}
