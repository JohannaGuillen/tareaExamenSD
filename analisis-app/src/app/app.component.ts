import { Component, OnInit, Injectable } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

class Suceso {
  nombreSuceso!: string;
  suceso!: string;
  icon!: PrimeIcons;
  color!: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable()
export class AppComponent implements OnInit {
  public eventsA: Suceso[] = [];
  public eventsB: Suceso[] = [];
  public eventsC: Suceso[] = [];
  public eventsD: Suceso[] = [];

  public sucesosList: Suceso[] = [];

  public contador: number = 0;

  public inputsuceso1: string = '';
  public inputsuceso2: string = '';

  public resultado: string = '';
  constructor(private http: HttpClient) {
    this.contador = 65;
  }

  ngOnInit() {
    var sucesos: Suceso[] = [];

    this.contador = 65;
    this.http
      .get('assets/files/bitacoraA.txt', {
        responseType: 'text',
      })
      .subscribe((data) => {
        this.eventsA = this.obtenerSecuencia(data);
      });

    this.http
      .get('assets/files/bitacoraB.txt', {
        responseType: 'text',
      })
      .subscribe((data) => {
        this.eventsB = this.obtenerSecuencia(data);
      });

    this.http
      .get('assets/files/bitacoraC.txt', {
        responseType: 'text',
      })
      .subscribe((data) => {
        this.eventsC = this.obtenerSecuencia(data);
      });

    this.http
      .get('assets/files/bitacoraD.txt', {
        responseType: 'text',
      })
      .subscribe((data) => {
        this.eventsD = this.obtenerSecuencia(data);
      });
  }

  obtenerSecuencia(data: string) {
    let lista: Suceso[] = [];

    let secuencias: string[] = data
      .replace(/\[/gi, '')
      .replace(/\]/gi, '')
      .replace(/-/gi, ' ')
      .split(' ');
    secuencias.forEach((value) => {
      if (value) {
        var suceso = new Suceso();
        suceso.nombreSuceso = String.fromCharCode(this.contador);
        suceso.suceso = value.split(',').toString();
        suceso.icon = PrimeIcons.ENVELOPE;
        suceso.color = '#673AB7';
        lista.push(suceso);
        this.contador++;
      }
    });
    return lista;
  }

  analizar() {
    var a = this.eventsC.concat(this.eventsD);
    var b = this.eventsB.concat(a);
    this.sucesosList = this.eventsA.concat(b);

    var suceso1 = this.sucesosList.find(
      (x) => x.nombreSuceso == this.inputsuceso1.toUpperCase()
    );
    var suceso2 = this.sucesosList.find(
      (x) => x.nombreSuceso == this.inputsuceso2.toUpperCase()
    );

    if (suceso1 && suceso2) {
      if (suceso1 != suceso2) {
        
        var x = suceso1.suceso.split(',');
        var y = suceso2.suceso.split(',');

        for (let i = 0; i < x.length; i++) {
          if (x[i] === y[i]) {
            console.log('igual');
          } else if (x[i] > y[i]) {
            this.resultado =
              suceso1.nombreSuceso +
              ' sucedió despues que ' +
              suceso2.nombreSuceso;
            break;
          } else {
            this.resultado =
              suceso1.nombreSuceso +
              ' sucedió antes que ' +
              suceso2.nombreSuceso;
            break;
          }
        }
      }
    } else {
      this.resultado =
        this.inputsuceso1 + 'o' + this.inputsuceso1 + 'no son valores validos';
    }
  }
}
