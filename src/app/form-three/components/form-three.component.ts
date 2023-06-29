import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.css']
})
export class FormThreeComponent {
  firstName = new FormControl('');
  lastName = new FormControl('');
  eMail = new FormControl('');
  phone = new FormControl('');
  message = new FormControl('');

  fNm:string| null = '';
  lNm:string| null = '';
  ml:string| null = '';
  phn:string| null = '';

  msg:string| null = '';


  setFirstName(){
    this.fNm = this.firstName.value;
  }

  setLastName(){
    this.lNm = this.lastName.value;
  }

  setEmail(){
    this.ml = this.eMail.value;
  }

  setPhone(){
    this.phn = this.phone.value;
  }

  setMessage(){
    this.msg = this.message.value;
  }

  stockData(){
    this.setFirstName();
    this.setLastName();
    this.setEmail();
    this.setPhone();
    this.setMessage();
  }
}
