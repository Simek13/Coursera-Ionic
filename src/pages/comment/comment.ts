import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  comment: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController, private formBuilder: FormBuilder) {

    this.comment = this.formBuilder.group({
      rating: [3, Validators.required],
      author: ['', Validators.required],
      comment: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log('this.comment.value');
    this.viewCtrl.dismiss();
  }

}
