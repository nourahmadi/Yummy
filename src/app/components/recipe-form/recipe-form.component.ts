import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  file: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getFile(event: any) {
    this.file = event.target.files[0];
  }
  uploadFile() {
    let formData = new FormData();
    formData.set('file', this.file);

    //call Api
    this.http
      .post('http://localhost:3001/upload/uploadFiles', formData)
      .subscribe((response) => {});
  }
}
