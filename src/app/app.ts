import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  // template: '<h1>hello i am hitesh</h1>',  // first execute templateUrl if not eists then angular execute template
  styleUrl: './app.css',

  //in new angular by default stand alone true but we now conver over application in moduler format that's way we need to standalone our component false
  // now here we cant import any thig here now we need to thigs import in our module file
  standalone: false
})
export class App {
  protected title = 'angular-ekart';
  items = [1, 2, 3, 4]
}
