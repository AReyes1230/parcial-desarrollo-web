import { Component } from '@angular/core';
import { Posts } from './posts/posts';

@Component({
  selector: 'app-root',
  imports: [Posts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}