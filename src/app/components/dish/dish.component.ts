import { Component, Input, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes.service';
import { DISH } from './model/dish';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
})
export class DishComponent implements OnInit {
  dishes: DISH[] = [];

  constructor(
    private dishesSesrvice: DishesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.dishes = this.dishesSesrvice
          .getDishes()
          .filter((dish) =>
            dish.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
          );
      } else {
        this.dishes = this.dishesSesrvice.getDishes();
      }
    });
  }
}
