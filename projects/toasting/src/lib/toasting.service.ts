import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast, ToastParams } from './toast';
import { ToastingComponent } from './toasting.component';


@Injectable({
  providedIn: 'root'
})
export class ToastingService {

  rootViewContainer: ViewContainerRef;
  constructor(private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  addDynamicComponent() {
    const factory = this.factoryResolver
      .resolveComponentFactory(ToastingComponent)
    const component = factory
      .create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(component.hostView)
  }

  private _toastSubject = new Subject<Toast>();

  subject$ = this._toastSubject.asObservable();

  toast(title: string, text: string, params?: ToastParams) {

    let toast;
    params ? toast = new Toast(title, text, params) : toast = new Toast(title, text);
    this._toastSubject.next(toast);
    this.factoryResolver
  }
}
