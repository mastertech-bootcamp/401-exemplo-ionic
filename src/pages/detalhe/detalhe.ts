import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {
  artistaNaTela;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.artistaNaTela = this.navParams.get('artista');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
