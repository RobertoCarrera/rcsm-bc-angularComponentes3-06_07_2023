import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularComponentes3';

  id: number = 0;
  descripcion: string = '';
  precio: number = 0;

  data_articulos: any = [
    {
      id: 1,
      descripcion: 'papas',
      precio: 10.55
    },
    {
      id: 2,
      descripcion: 'manzanas',
      precio: 12.1
    },
    {
      id: 3,
      descripcion: 'melon',
      precio: 52.3
    },
    {
      id: 4,
      descripcion: 'cebollas',
      precio: 17
    },
    {
      id: 5,
      descripcion: 'calabaza',
      precio: 20
    }
  ];

  // data_articulos: any = [
  //   {
  //     id: 1,
  //     descripcion: 'papas',
  //     precio: 10.55
  //   },
  //   {
  //     id: 2,
  //     descripcion: 'manzanas',
  //     precio: 12.1
  //   },
  //   {
  //     id: 3,
  //     descripcion: 'melon',
  //     precio: 52.3
  //   },
  //   {
  //     id: 4,
  //     descripcion: 'cebollas',
  //     precio: 17
  //   },
  //   {
  //     id: 5,
  //     descripcion: 'calabaza',
  //     precio: 20
  //   }
  // ];
}
