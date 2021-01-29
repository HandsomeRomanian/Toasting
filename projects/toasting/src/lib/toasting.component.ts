import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastingService } from '../public-api';
import { HorizontalPosition, Toast, ToastButton, ToastParams, VerticalPosition } from './toast';

@Component({
  selector: 'app-toasting',
  templateUrl: 'toasting.component.html',
  styleUrls: ['toasting.component.scss']
})
export class ToastingComponent implements AfterViewInit {

  @ViewChild('toast') toastContainer: ElementRef;
  toastStyle;
  toastText;
  toastTitle;
  clickDismiss;
  defToast: Toast;
  buttons: ToastButton[];

  constructor(private service: ToastingService) {

    this.service.subject$.subscribe(newToast => {

      if (this.toastStyle != null) {

        this.resetStyle();

        newToast ? this.toastStyle.display = 'block' : "";

        newToast.text ? this.toastText.innerHTML = newToast.text : "";

        newToast.title ? this.toastTitle.innerHTML = newToast.title : "";

        newToast.params.color ? this.toastStyle.cssText += "background-color: red !important;" : "";

        newToast.params.verticalPosition ? this.toastStyle.background = newToast.params.color : "";

        newToast.params.clickDismiss ? this.clickDismiss = newToast.params.clickDismiss : this.clickDismiss = false;

        this.buttons = newToast.params.buttons;

        this.setLocation(newToast.params);

        this.setDelay(newToast.params.duration)
      }
    })
  }

  ngAfterViewInit(): void {
    this.toastText = this.toastContainer.nativeElement.children['toast-text'];
    this.toastTitle = this.toastContainer.nativeElement.children['toast-title'];
    this.toastStyle = this.toastContainer.nativeElement.style;
  }

  setDelay(ms: number) {
    new Promise(resolve => setTimeout(resolve, ms || 5000)).then(
      () => {
        this.resetStyle();
      });
  }

  dismiss(btn?: ToastButton) {
    console.log(btn);

    if (((!this.buttons || this.buttons.length < 1) && this.clickDismiss) || (btn && btn.closeBTN)) {
      this.resetStyle();
    }

  }

  resetStyle() {
    this.toastContainer.nativeElement.style.display = 'none';
    this.toastStyle.background = null;
    this.toastTitle.innerHTML = "Toast title or header"
    this.toastText.innerHTML = "Toast description or text."
  }


  setLocation(params: ToastParams) {
    params.horizontalPosition ? "" : params.horizontalPosition = HorizontalPosition.Left;
    params.verticalPosition ? "" : params.verticalPosition = VerticalPosition.Top;

    if (params.horizontalPosition == HorizontalPosition.Left) {
      this.toastStyle.left = "0px";
      delete this.toastStyle.right;
    }
    if (params.horizontalPosition == HorizontalPosition.Right) {
      this.toastStyle.right = "0px";
      delete this.toastStyle.left;
    }
    if (params.horizontalPosition == HorizontalPosition.Middle) {
      this.toastStyle.left = "50%";
      this.toastStyle.transform = "translate(-50%, 0)";
      this.toastStyle.margin = "auto";
    }
    if (params.verticalPosition == VerticalPosition.Top) {
      this.toastStyle.top = "0px";
      delete this.toastStyle.bottom;

    }
    if (params.verticalPosition == VerticalPosition.Bottom) {
      this.toastStyle.bottom = "0px";
      delete this.toastStyle.top;
    }
    if (params.verticalPosition == VerticalPosition.Middle) {
      this.toastStyle.top = "50%";
      this.toastStyle.transform = "translate(-50%, -50%)";
      this.toastStyle.margin = "auto";
    }
    if (params.clickDismiss) {
      this.toastStyle.cssText += " cursor: pointer;"
    }
  }



}
