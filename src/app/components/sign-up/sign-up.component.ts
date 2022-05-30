import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  RADIO_LIST = [{ name: 'Gender', value: 'Male', checked: false }];
  constructor() {}
  ngOnInit(): void {}
  submit() {}
}
