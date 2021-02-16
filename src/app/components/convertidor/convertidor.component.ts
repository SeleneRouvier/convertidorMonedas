import { Component, OnInit } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRA', 'ARS']

  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    switch(this.tengo) {
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad * 0.83
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.72
        }
        if (this.quiero === 'ARS'){
          this.total = this.cantidad * 88.45
        }
        break;
      case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.21;
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad 
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.87
        }
        if (this.quiero === 'ARS'){
          this.total = this.cantidad * 107.10
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.39
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad * 1.15
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad 
        }
        if (this.quiero === 'ARS'){
          this.total = this.cantidad * 123.03
        }
        break;
      case 'ARS':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.011
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad * 0.0093
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.0081
        }
        if (this.quiero === 'ARS'){
          this.total = this.cantidad
        }
        break;
      

    }
  }

}
