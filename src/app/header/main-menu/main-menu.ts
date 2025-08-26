import { Component, Host, inject, Inject, Self, SkipSelf } from '@angular/core';


@Component({
  selector: 'main-menu',
  standalone: false,
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
  providers: [

  ]
})
export class MainMenu {
  mainMenuItems: string[] = ['Home', 'Products', 'Sale', 'New_Arrival', 'Contact', 'Services'];
}
