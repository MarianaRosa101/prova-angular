import { Component } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent {

  inputValue: number = 0;
  fromUnit: string = 'BRL';
  toUnit: string = 'BRL';
  exchangeRate: number = 1;
  convertedValue: number = 0;

  convert() {
    let valueInBRL = 0;

    switch(this.fromUnit) {
      case 'BRL':
        valueInBRL = this.inputValue;
        break;
      case 'USD':
        valueInBRL = this.inputValue * this.exchangeRate;
        break;
      case 'EUR':
        valueInBRL = this.inputValue * this.exchangeRate;
        break;
    }

    switch(this.toUnit) {
      case 'BRL':
        this.convertedValue = valueInBRL;
        break;
      case 'USD':
        this.convertedValue = valueInBRL / this.exchangeRate;
        break;
      case 'EUR':
        this.convertedValue = valueInBRL / this.exchangeRate;
        break;
    }
  }
}
