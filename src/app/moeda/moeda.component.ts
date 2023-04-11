import { Component } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent {

  inputValue: number = 0;
  fromUnit: string = 'R$';
  toUnit: string = 'R$';
  convertedValue: number = 0;

  convert() {
    let valueInR$ = 0;

    switch(this.fromUnit) {
      case 'R$':
        valueInR$ = this.inputValue;
        break;
      case 'US$':
        valueInR$ = this.inputValue * 5.07;
        break;
      case '€':
        valueInR$ = this.inputValue * 5.54;
        break;
    }

    switch(this.toUnit) {
      case 'R$':
        this.convertedValue = valueInR$;
        break;
      case 'US$':
        this.convertedValue = valueInR$ / 5.07;
        break;
      case '€':
        this.convertedValue = valueInR$ / 5.54;
        break;
    }
  }
}

