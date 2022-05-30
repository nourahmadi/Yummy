import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DISH } from '../components/dish/model/dish';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.css'],
})
export class DishPageComponent implements OnInit {
  dish!: DISH;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dishesService: DishesService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.dish = dishesService.getDishById(params['id']);
      }
    });
  }

  ngOnInit(): void {}
}
