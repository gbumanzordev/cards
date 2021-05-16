import { Component, Input } from '@angular/core';
import { Carta } from '../../models/carta.model';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
})
export class CartaComponent {
  @Input() carta: Carta;
}
