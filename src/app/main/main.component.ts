import { Component, OnInit } from '@angular/core';
import { HorizontalPosition } from '../toasting/toast/toast';
import { ToastingService } from '../toasting/toasting.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private service: ToastingService) {
    console.log("main");

  }

  ngOnInit(): void {
  }

  allo() {
    this.service.toast("Une erreur est survenue", "Une erreur est survenue lors de la communication avec le serveur.",
      {
        duration: 100000,
        horizontalPosition: HorizontalPosition.Right,
        buttons: [
          {
            text: "Allo",
            callback: alert
          }
        ]
      })
  }

}
