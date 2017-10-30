import { downgradeComponent, setAngularLib } from '@angular/upgrade/static';
import { AppComponent } from './app.component';

import * as angular from 'angular';

angular
  .module('legacy-app', [])
  .component('myHello', {
    template: '<p>Hello from mgol!</p>',
  });


angular
  .module('downgraded-app', ['legacy-app'])
  .directive('appRoot', downgradeComponent({ component: AppComponent }));

// Additional configuration invoked right before bootstrap
export function configureLegacyApp(/* i: Injector */) {
  // The following line is not needed as `angular` is available on `window`.
  setAngularLib(angular);

  // Insert additional configuration here
}
