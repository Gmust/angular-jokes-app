import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

export enum ButtonVariant {
  Primary= 'Primary',
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
  @Input() buttonName: string = 'Button';
  mainStyle: string = 'btn';
  @Input() variant: ButtonVariant = ButtonVariant.Primary;

  ngOnInit() {
  }
}
