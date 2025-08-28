import { Input, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { App } from "./app";
import { HeaderComponent } from "./header/header.component";
import { TopHeader } from './top-header/top-header';
import { TopMenu } from './header/top-menu/top-menu';
import { MainMenu } from './header/main-menu/main-menu';
import { ContainerComponent } from './container/container.component';
import { Search } from './container/search/search';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';

@NgModule({
  declarations:[ // here we specify all these thigs who comes from this module like components pipes  => who all have standalone falee
    App,
    HeaderComponent,
    TopHeader,
    TopMenu,
    MainMenu,
    ContainerComponent,
    Search,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent
  ],
  imports: [  // all the external module  => who all have standalone true => in this app by default it's true
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [

  ], // register all our services that we only need to create ones
  bootstrap: [App], // specify that component shoud load when load our app module

  exports: []  // use by this all this this availabel in that module where we import it
})
export class AppModule{ }
