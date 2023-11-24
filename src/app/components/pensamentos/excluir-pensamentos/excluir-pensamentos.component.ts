import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from 'src/app/interface/IPensamento';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.scss'],
})
export class ExcluirPensamentosComponent {
  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe();
      this.router.navigate(['/listarPensamento']);
    }
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }
}
