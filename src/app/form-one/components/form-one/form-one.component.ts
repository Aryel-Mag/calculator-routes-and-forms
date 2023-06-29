import { Component } from '@angular/core';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent {
  firstName: string = 'Fred';
  lastName: string = '';
  eMail: string = '';
  phone: string = '';

  message: string = '';

  live_firstName: string = 'Fred';
  live_lastName: string = '';
  live_eMail: string = '';
  live_phone: string = '';
  live_message: string = '';

  saveUser(value: any): void {
    console.log(value.firstName);

    this.live_firstName = value.firstName;
    this.live_lastName = value.lastName;
    this.live_eMail = value.eMail;
    this.live_phone = value.mobile;
    this.live_message = value.message;

  }
}
