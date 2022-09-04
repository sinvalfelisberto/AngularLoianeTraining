import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  nome: any = 'abc';

  pessoa: any = {
    nome:  'Sinval Amaral Felisberto',
    idade: 40
  }

  constructor() { }

  retornaIdade(ano: number){
    return 2022 - ano
  }

  ngOnInit(): void {
  }

}
