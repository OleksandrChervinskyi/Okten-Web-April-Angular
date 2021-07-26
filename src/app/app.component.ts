import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Okten-Web-April-Angular';
  users = [
    {name: 'alex', age: 22},
    {name: 'dimon', age: 23},
    {name: 'tana', age: 19},
  ]
}

