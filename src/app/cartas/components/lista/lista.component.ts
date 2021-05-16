import { Component, OnInit } from '@angular/core';
import { CartasService } from '../../services/cartas.service';
import { Carta } from '../../models/carta.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  cartas: Carta[] = [];
  cartasFiltradas: Carta[] = [];
  offset = 25;
  pagina: number;

  constructor(private cartasService: CartasService) {}

  ngOnInit(): void {
    this.obtenerCartas();
  }

  agregarCartas(): void {
    this.pagina++;
    this.cartasFiltradas = [...this.cartas.slice(0, this.offset * this.pagina)];
  }

  buscarTarjetas(event: { termino: string; filtro: string }) {
    // Todo: Llamar el servicio, con termino y filtro.
    this.cartasService.buscarCartas(event).subscribe((r) => {
      this.pagina = 1;
      this.cartas = r.data;
      this.cartasFiltradas = this.cartas.slice(0, this.offset);
    });
  }

  obtenerCartas(): void {
    this.cartasService.obtenerCartas().subscribe(({ data }) => {
      this.cartas = data;
      this.pagina = 1;
      this.cartasFiltradas = data.slice(0, this.offset);
    });
  }
}
