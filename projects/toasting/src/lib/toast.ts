export enum VerticalPosition {
    Top,
    Middle,
    Bottom,
}
export enum HorizontalPosition {
    Left,
    Middle,
    Right,
}

export class Toast {

    constructor(
        public title: string,
        public text: string,
        public params: ToastParams = {
            verticalPosition: VerticalPosition.Top,
            horizontalPosition: HorizontalPosition.Left
        }
    ) { }

}

export interface ToastParams {
    color?: string;
    duration?: number;
    clickDismiss?: boolean;
    verticalPosition?: VerticalPosition;
    horizontalPosition?: HorizontalPosition;
    buttons?: ToastButton[];
}

export interface ToastButton {

    text: string;
    closeBTN?: boolean;
    callback?: any;
    cssClass?: string;

}