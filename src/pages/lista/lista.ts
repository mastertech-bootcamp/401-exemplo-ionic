import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  artistas = [
    {nome: 'Michael Jackson', genero: 'Pop'},
    {nome: 'David Bowie', genero: 'Pop'},
    {nome: 'Jimmy Hendrix', genero: 'Rock'},
    {nome: 'Led Zeppelin', genero: 'Rock'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  irParaDetalhe(item){
    let parametros = {
      artista: item
    };

    this.navCtrl.push(DetalhePage, parametros);
  }

}

