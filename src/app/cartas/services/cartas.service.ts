import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../core/models/api-response.model';
import { Carta } from '../models/carta.model';

@Injectable()
export class CartasService {
  private url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  obtenerCartas(): Observable<ApiResponse<Carta[]>> {
    return this.httpClient.get<ApiResponse<Carta[]>>(
      `${this.url}/cardinfo.php`
    );
  }

  obtenerCarta(id: number): Observable<ApiResponse<Carta[]>> {
    return this.httpClient.get<ApiResponse<Carta[]>>(
      `${this.url}/cardinfo.php?id=` + id
    );
  }

  buscarCartas({ termino, filtro }): Observable<ApiResponse<Carta[]>> {
    return this.httpClient.get<ApiResponse<Carta[]>>(
      `${this.url}/cardinfo.php?${filtro}=${termino}`
    );
  }
}
