import { Component, Host, Inject } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: false,

  // template: '<main-menu></main-menu>',

  templateUrl: './header.component.html',

  // styles: [
  //   'a{text-decoration: none; margin: 0 10px; color: #0000FF;}',
  //   'button{padding: 10px 20px}',
  //   '.ekart--header{width:  100%; height: 70px}'
  // ],
  styleUrls: ['./header.component.css'], //here we can use multiple css files
  providers: [

  ]
})
export class HeaderComponent {

}
