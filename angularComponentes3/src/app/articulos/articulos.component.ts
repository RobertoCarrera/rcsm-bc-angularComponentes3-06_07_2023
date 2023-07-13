import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {

  @Input() articulos: any = [];

  mostrarError: boolean = false;
  seleccionPuntero: number = 0;

  seleccionarArticulo(newPuntero: number): void
  {
    
    this.seleccionPuntero = newPuntero;
  }

  borrarArticulo(newPuntero: number): void
  {

    this.articulos[newPuntero-1] = '';
  }

  agregarArticulo(newCodigo: string, newDescripcion: string, newPrecio: string)
  {

    let conversionID: number = 0;
    let conversionPrecio: number = 0;

    conversionID = +newCodigo;
    conversionPrecio = +newPrecio;

    this.articulos.push({
      id: conversionID,
      descripcion: newDescripcion,
      precio: conversionPrecio
    });
  }

  modificarArticulo(newCodigo: string, newDescripcion: string, newPrecio: string)
  {

    if(this.seleccionPuntero == 0)
    {

      this.mostrarError = true;
    } else
    {

      let conversionID: number = 0;
      let conversionPrecio: number = 0;
  
      conversionID = +newCodigo;
      conversionPrecio = +newPrecio;
  
      this.articulos[this.seleccionPuntero-1].id = conversionID;
      this.articulos[this.seleccionPuntero-1].descripcion = newDescripcion;
      this.articulos[this.seleccionPuntero-1].precio = conversionPrecio;

      this.mostrarError = false;
    }

    this.seleccionPuntero = 0;
  }

}
