import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movie = {
    imdbUrl: "http://www.imdb.com/title/tt2305051/"
 }
}
