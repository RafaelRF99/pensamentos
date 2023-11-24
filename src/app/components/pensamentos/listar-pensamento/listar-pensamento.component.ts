import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para componente filho',
      autoria: 'Sou componente Pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Sou componente Filho',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias praesentium porro, ducimus veniam asperiores tempora rerum quaerat atque sit? Ullam voluptatibus tempore aliquam nihil soluta! Tempora voluptates nostrum sint quas?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias praesentium porro, ducimus veniam asperiores tempora rerum quaerat atque sit? Ullam voluptatibus tempore aliquam nihil soluta! Tempora voluptates nostrum sint quas?',
      autoria: 'Angular',
      modelo: 'modelo1',
    },
  ];
}
