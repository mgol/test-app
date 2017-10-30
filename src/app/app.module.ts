import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';

import { MyHelloComponent } from './my-hello-component';

import { configureLegacyApp } from './legacy-app-setup';

@NgModule({
  declarations: [
    AppComponent,
    MyHelloComponent,
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(): void {
    configureLegacyApp();
    this.upgrade.bootstrap(document.body, ['downgraded-app']);
  }
}
