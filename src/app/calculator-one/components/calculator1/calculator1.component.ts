import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css']
})
export class Calculator1Component {
  protected valueOne: string = '0'
  protected valueTwo: string = '0'
  protected sign: string = ''
  result: string = '0'
  resultNumber: number = 0
  list: number[] = [1, 2, 3]
  classBtn: string = 'grid-item';

  calculate(){
      if(!this.valueTwo){
         this.result = 'Error'
      }
    switch(this.sign){
       case "+":
          this.resultNumber = parseInt(this.valueOne) + parseInt(this.valueTwo)
          this.result = this.resultNumber.toString()
       break
       case "-":
          this.resultNumber = parseInt(this.valueOne) - parseInt(this.valueTwo)
          this.result = this.resultNumber.toString()
       break
       case "*":
          this.resultNumber = parseInt(this.valueOne) * parseInt(this.valueTwo)
          this.result = this.resultNumber.toString()
       break
       case "/":
          this.resultNumber = parseInt(this.valueOne) / parseInt(this.valueTwo)
          this.result = this.resultNumber.toString()
       break
    }
    this.valueOne = '0'
    this.valueTwo = '0'
    this.sign = ''
 }

  display(value: string): number[]{
    if(!this.sign){
      if(this.valueOne === '0'){
         this.valueOne = value
      } else{
         this.valueOne += value
      }
      this.result = this.valueOne;
   }else{
      if(this.valueTwo === '0'){
         this.valueTwo = value
      } else{
         this.valueTwo += value
      }
      this.result = this.valueTwo;
   }
   return this.list
  }

  changeOp(op: string){
   this.sign = op
  }

  clear(){
   this.valueOne = '0'
   this.valueTwo = '0'
   this.result = '0'
   this.sign = ''
  }


  // this.result = parseInt(valueOne) + parseInt(valueTwo)
}