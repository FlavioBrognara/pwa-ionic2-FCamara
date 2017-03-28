import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';


@Component({
  selector: 'page-camera-teste',
  templateUrl: 'camera-teste.html'
})
export class CameraTestePage {
  public base64Image: string;
  public permission: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){}
    
<<<<<<< HEAD

<<<<<<< HEAD
 takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
=======
  notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
>>>>>>> 79e48d1... Cards camera loop working and splash screen
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}Notification.requestPermission();function spawnNotification(corpo,icone,titulo) {
  var opcoes = {
      body: corpo,
      icon: icone
  }
  var n = new Notification(titulo,opcoes);
}
=======
>>>>>>> 694a257... Notifications working
}

