import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPensamento } from 'src/app/interface/IPensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent {
  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(private router: Router, private service: PensamentoService) {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe();
    this.router.navigate(['/listarPensamento']);
  }

  cancelar() {
    console.log('Ação cancelada!');
    this.router.navigate(['/listarPensamento']);
  }
}
