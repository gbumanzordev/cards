import { Component, OnInit } from '@angular/core';
import { CartasService } from '../../services/cartas.service';
import { ActivatedRoute } from '@angular/router';
import { Carta } from '../../models/carta.model';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  id: number;
  carta: Carta;
  constructor(
    private cartasService: CartasService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.id = Number(params.get('id'));
        this.obtenerDetalles();
      }
    });
  }

  obtenerDetalles(): void {
    this.cartasService.obtenerCarta(this.id).subscribe(({ data }) => {
      this.carta = data[0];
    });
  }
}
