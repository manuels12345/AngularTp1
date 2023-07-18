import { Component, OnInit } from '@angular/core';

type Items = {

  name: string;
  costos: string;

}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    
  }

  items: Items[] = [
    {
      name: 'Bici', costos: '120000'
    },
    {
      name: 'Moto', costos: '800000'
    },
    {
      name: 'Monopatin', costos: '60000'
    },
    {
      name: 'Manubrio', costos: '6000'
    },
    {
      name: 'Cubierta', costos: '12000'
    },
    {
      name: 'Aciento', costos: '8450'
    }

  ]

  mostrarLista = false;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}

