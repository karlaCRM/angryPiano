import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';


  makeSound(num : number){
let audio = new Audio();
audio.src = "../assets/sounds/note" + num + ".mp3"
audio.load();

audio.play();
  }
}


