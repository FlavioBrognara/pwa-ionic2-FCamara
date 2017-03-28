import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Camera } from 'ionic-native';



@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public base64Image: string;
  public images: string[] = [];
  public page1: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){d
    }

 takePicture(){
<<<<<<< HEAD
<<<<<<< HEAD
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
<<<<<<< HEAD
        targetWidth: 1000,
        targetHeight: 1000
=======
=======
    CameraMock.getPicture({
        destinationType: CameraMock.DestinationType.DATA_URL,
        sourceType: CameraMock.PictureSourceType.CAMERA,
<<<<<<< HEAD
        quality: 100,
>>>>>>> d557aec... ta funcionando, naquelas
        targetWidth: 540,
        targetHeight: 380
>>>>>>> 2986890... testando signle page
=======
=======
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
>>>>>>> 79e48d1... Cards camera loop working and splash screen
        quality: 100
>>>>>>> f5c5ae2... Camear style modified
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.images.push(this.base64Image);
        console.log(this.images);
    }, (err) => {
        console.log(err);
    });
  }
}

