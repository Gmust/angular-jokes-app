import {Component} from '@angular/core';
import {BlackListCategories, CustomCategories} from "../../../@types/categories";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ButtonComponent, ButtonVariant} from "../../button/button.component";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    ButtonComponent,
    KeyValuePipe,
    NgForOf,
    FormsModule,
    NgIf,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  protected readonly CustomCategories = CustomCategories;
  protected readonly BlackListCategories = BlackListCategories
  selectedCategories: string[] = [];
  selectedBlacklistedCategories: string[] = [];
  isCustomCategories: boolean = false;
  term: string = '';
  jokesAmount: number = 1;

  onRadioChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    return this.isCustomCategories = value !== 'Any';
  }

  addToSelectedCategories(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.selectedCategories.push(value);
  }

  addToBlacklistedCategories(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.selectedBlacklistedCategories.push(value);
  }

  protected readonly ButtonVariant = ButtonVariant;
}
