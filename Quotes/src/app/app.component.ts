import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    new Quote('Kevin Ligare','Work Hard','Ian Ombima')
  ]
}