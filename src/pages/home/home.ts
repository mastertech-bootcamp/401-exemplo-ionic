import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  imagemVisivel = false;

  constructor(public navCtrl: NavController) {
    setTimeout(this.exibirImagem.bind(this), 500);
  }

  exibirImagem(){
    this.imagemVisivel = true;
  }

  irParaLista(){
    this.navCtrl.push(ListaPage);
  }

}
