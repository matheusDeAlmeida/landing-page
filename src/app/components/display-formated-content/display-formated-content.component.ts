import { Component, Input } from '@angular/core';
import { types } from '../../utils';

@Component({
  selector: 'app-display-formated-content',
  templateUrl: './display-formated-content.component.html',
  styleUrls: ['./display-formated-content.component.scss']
})
export class DisplayFormatedContentComponent {
  @Input() content =
  {
    item: 'Sobre',
    type: types.text,
    description: `Estes projetos foram criados originalmente para fazer testes
    de desempenho para o meu trabalho de graduação. Esta página contém os links
    para os repositórios de cada projeto criado durante a realização do trabalho.`,
  };

  constructor() { }

}
