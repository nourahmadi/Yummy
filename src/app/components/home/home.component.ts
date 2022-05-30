import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { DISH } from '../dish/model/dish';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dishes: DISH[] = [];
  searchTerm: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}
// just added a comment
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    });
  }
  search() {
    if (this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm);
    }
  }
  dishesReset() {
    if (!this.searchTerm) {
      this.router.navigateByUrl('');
    }
  }
  scroll(el: any) {
    el.scrollIntoView({ behavior: 'auto' });
  }
}
