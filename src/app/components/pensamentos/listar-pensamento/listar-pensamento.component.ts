import { Component } from '@angular/core';
import { IPensamento } from 'src/app/interface/IPensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent {
  listaPensamentos: IPensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.listaPensamentos = lista;
    });
  }
}
