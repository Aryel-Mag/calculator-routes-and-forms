import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component {
  valueOne:string = ''
  valueTwo:string = ''
  result:string = '0'
  operator:string = ''

  tempValue: number = 0


  display(value: string){
    if(this.operator === ''){
      if(this.result === "0"){
        this.valueOne = value
      }else{
        this.valueOne += value
      }
      this.result = this.valueOne
    }else{
      if(this.result === "0"){
        this.valueTwo = value
      }else{
        this.valueTwo += value
      }
      this.result = this.valueTwo
    }
  }

  signChange(sign: string){ this.operator = sign}

  calculate(){
    switch(this.operator){
      case '+':
        this.tempValue = parseInt(this.valueOne) + parseInt(this.valueTwo)
        this.result = this.tempValue.toString()
        break
      case '-':
        this.tempValue = parseInt(this.valueOne) - parseInt(this.valueTwo)
        this.result = this.tempValue.toString()
        break
      case '*':
        this.tempValue = parseInt(this.valueOne) * parseInt(this.valueTwo)
        this.result = this.tempValue.toString()
        break
      case '/':
        this.tempValue = parseInt(this.valueOne) / parseInt(this.valueTwo)
        this.result = this.tempValue.toString()
        break
    }
    this.valueOne = ''
    this.valueTwo = ''
    this.operator = ''
  }

  clearResult(){
    this.valueOne = ''
    this.valueTwo = ''
    this.result = '0'
    this.operator = ''
  }
}
