import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'my-hello',
})
// tslint:disable-next-line:directive-class-suffix
export class MyHelloComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    // We must pass the name of the directive as used by AngularJS to `super`
    super('myHello', elementRef, injector);
  }
}
