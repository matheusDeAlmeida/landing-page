import { Component, OnInit } from '@angular/core';
import { types } from '../../utils';

@Component({
  selector: 'app-tcc',
  templateUrl: './tcc.component.html',
  styleUrls: ['./tcc.component.scss']
})
export class TccComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  frameworksList = [
    'Quarkus',
    'Spring Boot',
    'Sobre',
  ];

  content = [
    {
      item: 'Quarkus',
      type: types.repository,
      description: 'https://github.com/matheusDeAlmeida/quarkus',
    },
    {
      item: 'Spring Boot',
      type: types.repository,
      description: 'https://github.com/matheusDeAlmeida/SpringBoot-GraalVM',
    },
    {
      item: 'Sobre',
      type: types.text,
      description: `Estes projetos foram criados originalmente para sofrerem testes
      de desempenho para coletar medições para o meu trabalho de graduação. Esta página
      contém os links para os repositórios de cada projeto criado durante a realização
      do trabalho.
      <br><br>
      Na raiz do repositório do projeto feito com Spring Boot, há scripts de testes
      do JMeter que servem para o projeto feito com Quarkus também.
      <br><br>
      Para compilar e executar as aplicações, basta seguir as instruções do README de
      cada repositório.
      <br><br>
      Para executar os testes com o <b>JMeter</b>, execute este comando na pasta <b>bin</b>
      (onde o JMeter foi descompactado):
      <br>
      $ sh ./jmeter -n -t /caminho/do/repositório/spring-jmeter-1.jmx
      -l /caminho/do/relatório/em/formato/jmeter/nome-do-arquivo.jtl
      -e -o /caminho/do/relatorio/em/html
      <br><br><br><br>
      2020 | Criado por <b>Matheus Santos de Almeida</b>`,
    },
  ]

  selectContent(content: string): {
    item: string;
    type: types;
    description: string;
  } {

    let contentObj = this.content.find(c => content == c.item);

    if (typeof (contentObj) !== 'undefined') {
      return contentObj;
    } else {
      return {
        item: 'Aplicações Web Backend',
        type: types.text,
        description: '2020 | Criado por <b>Matheus Santos de Almeida</b>',
      }
    }
  }
}
