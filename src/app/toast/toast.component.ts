import {Component} from '@angular/core';
import {ToastService} from "../services/toast.service";
import {NgClass, NgForOf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {

  constructor(public toastService: ToastService) {
  }

  removeToast(index: number) {
    this.toastService.remove(index);
  }

  ngOnInit(): void {
  }
}
