import { Component, OnInit } from '@angular/core';
import { ToastingService, HorizontalPosition } from 'toasting';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private service: ToastingService) {

  }

  ngOnInit(): void {
  }

  allo() {
    this.service.toast("Une erreur est survenue", "Une erreur est survenue lors de la communication avec le serveur.",
      {
        duration: 100000,
        horizontalPosition: HorizontalPosition.Right,
        clickDismiss: true,
        buttons: [
          {
            text: "Close",
            callback: this.test
          }
        ]
      })
  }

  test(test) {
    console.log(test);

  }

}
