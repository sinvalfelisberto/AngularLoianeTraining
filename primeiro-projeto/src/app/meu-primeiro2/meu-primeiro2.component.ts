import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css'],
  template: `<p>Meu segundo component</p>`
})
export class MeuPrimeiro2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
