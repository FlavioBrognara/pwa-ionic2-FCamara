import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraTestePage } from './../pages/camera-teste/camera-teste';

<<<<<<< HEAD
<<<<<<< HEAD
=======
// import { Camera } from '@ionic-native/camera';

// export class CameraMock extends Camera {
//   getPicture(options) {
//     console.log(JSON.stringify(options))
//     let string = JSON.stringify(options)
//     let Base64 = btoa(string)
//     return new Promise((resolve, reject) => {
//       resolve(Base64);
//     })
//   }
// }

>>>>>>> d38843b... firebase deploy
=======

>>>>>>> 0fa23c6... first commit
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    CameraTestePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    CameraTestePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // {provide: Camera, useClass: CameraMock},
>>>>>>> d38843b... firebase deploy
=======
>>>>>>> b496968... camera funcionando
=======
>>>>>>> 0fa23c6... first commit
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}