import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor(private router: Router) {}

  criarPensamento() {
    alert('Novo pensamento criado!');
  }

  cancelar() {
    console.log('Ação cancelada!');
    this.router.navigate(['/listarPensamento']);
  }
}
