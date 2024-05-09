import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass} from "@angular/common";

export enum ButtonVariant {
  Primary = 'Primary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning'
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {


  mainStyle: string = 'btn';
  @Input() buttonName: string = 'Button';
  @Input() variant: ButtonVariant = ButtonVariant.Primary;
  @Input() classes: string[] = [];
  @Input() clickHandler: Function | null = null;
  @Input() keyUpHandler: Function | null = null;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onKeyUpEnter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  handleOnKeyUpEnter(event: any) {
    if (this.keyUpHandler) {
      this.keyUpHandler(event);
    }
    this.onKeyUpEnter.emit(event);
  }

  handleClick(event: any) {
    if (this.clickHandler) {
      this.clickHandler(event);
    }
    this.buttonClick.emit(event);
  }
}
