import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { CartasRoutingModule } from './cartas-routing.module';
import { CartaComponent } from './components/carta/carta.component';
import { HttpClientModule } from '@angular/common/http';
import { CartasService } from './services/cartas.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaComponent,
    DetallesComponent,
    CartaComponent,
    FiltrosComponent,
  ],
  imports: [
    CommonModule,
    CartasRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
  ],
  providers: [CartasService],
})
export class CartasModule {}
