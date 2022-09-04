import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'httl://www.felisberto.com.br';
  urlImagem: string = 'https://i.picsum.photos/id/533/200/200.jpg?hmac=HvhCl1BSaQrsbedBJm-X8gfnZGp_222QGZ-mYnstPiA';
  cursoAngular: boolean = true;
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;
  nome: any = 'abc';

  pessoa: any = {
    nome:  'def',
    idade: 23
  }


  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert(this.valorAtual);
  }

  onKeyUp(event: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>event.target).value);
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onInputText(evento: any){
    this.nome = ((<HTMLInputElement>evento.target).value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
