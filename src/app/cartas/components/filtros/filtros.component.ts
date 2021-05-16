import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent {
  filtro = '';
  termino = '';
  mostrarOcultarFiltros = false;
  @Output() busqueda = new EventEmitter<{ termino: string; filtro: string }>();
  @Output() limpiar = new EventEmitter();

  buscar(): void {
    if (this.filtro !== '' && this.termino !== '') {
      this.mostrarOcultarFiltros = true;
      this.busqueda.emit({ termino: this.termino, filtro: this.filtro });
    }
  }

  limpiarFiltros(): void {
    this.filtro = '';
    this.termino = '';
    this.limpiar.emit();
    this.mostrarOcultarFiltros = false;
  }
}
