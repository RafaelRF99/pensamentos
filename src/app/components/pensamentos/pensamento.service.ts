import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPensamento } from 'src/app/interface/IPensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(this.API);
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  excluir(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<IPensamento>(url);
  }

  buscarId(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<IPensamento>(url);
  }
}
