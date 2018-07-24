import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ASTWithSource } from '@angular/compiler';


if (environment.production) {
  enableProdMode();
}
ASTWithSource.

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
