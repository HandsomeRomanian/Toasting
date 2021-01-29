import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { ToastingService } from './toasting/toasting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'customModules';


  constructor(@Inject(ToastingService) service,
    @Inject(ViewContainerRef) viewContainerRef) {
    service.setRootViewContainerRef(viewContainerRef)
    service.addDynamicComponent()
  }


  ngOnInit(): void {
  }

}

