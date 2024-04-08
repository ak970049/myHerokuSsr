import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  time = new Date();
  intervalId: any;
  constructor(private ngZone: NgZone){
    // if (window.innerWidth <= 992) {
    //   console.log("small window")
    // }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('farmqUser', "Ashish");
    } else {
      console.log('Web Storage is not supported in this environment.');
    }
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.time = new Date();
        console.log(this.time)
      }, 1000);
    });
   
  }
  title = 'NoStandaloneApp';

  openWindow(){
    if (typeof localStorage !== 'undefined') {
      let user:any= localStorage.getItem('farmqUser');
      console.log(user)
    } else {
      console.log('Web Storage is not supported in this environment.');
    }
    window.location.reload();
  }
  
}
