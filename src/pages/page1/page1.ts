import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';




import { Camera } from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public images: string[] = [];
<<<<<<< HEAD
  public page1: any;
=======
  public cards: string[] = [];
>>>>>>> b496968... camera funcionando



  constructor(
    public navCtrl: NavController,
<<<<<<< HEAD
    public navParams: NavParams){d
=======
    public navParams: NavParams) {
  }

  openCamera() {
    // Grab elements, create settings, etc.
    var video = <any>document.getElementById('video');

    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
>>>>>>> b496968... camera funcionando
    }
  }

<<<<<<< HEAD
 takePicture(){
<<<<<<< HEAD
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
=======
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
>>>>>>> d38843b... firebase deploy
        quality: 100
>>>>>>> f5c5ae2... Camear style modified
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.images.push(this.base64Image);
        console.log(this.images);
    }, (err) => {
        console.log(err);
=======
  takePicture() {
    // Elements for taking the snapshot
    var canvas = <any> document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    // Trigger photo take
    document.getElementById("snap").addEventListener("click", function () {
      context.drawImage(video, 0, 0, 640, 480);
>>>>>>> b496968... camera funcionando
    });
  }

}

