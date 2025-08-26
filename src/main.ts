// this is newest format for rendering angular application

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app1/app.config';
// import { App } from './app1/app';


// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


// -> for moduler formet we need to install platform-browser-dynamic udsing by " npm install @angular/platform-browser-dynamic "
// -> and then after we can convert our app component in moduler format

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
