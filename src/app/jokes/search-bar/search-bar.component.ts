import {Component, EventEmitter, Output} from '@angular/core';
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
  protected readonly ButtonVariant = ButtonVariant;

  selectedCategories: string[] = [];
  selectedBlacklistedCategories: string[] = [];
  isCustomCategories: boolean = false;
  term: string = '';
  jokesAmount: number = 1;

  @Output() newQuery: EventEmitter<string> = new EventEmitter<string>();

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

  handleSearch() {
    this.newQuery.emit(this.generateQueryString())
  }

  generateQueryString() {
    let queryString: string = '';
    if (this.isCustomCategories) {
      queryString += this.selectedCategories.join(',') + '?';
    } else {
      queryString += '/Any?';
    }
    if (this.selectedBlacklistedCategories.length > 0) {
      queryString += 'blacklistFlags=' + this.selectedBlacklistedCategories.join(',') + '&';
    }
    if (this.term) {
      queryString += 'contains=' + this.term + '&';
    }
    if (this.jokesAmount > 1) {
      queryString += 'amount=' + this.jokesAmount + '&';
    }
    if (queryString.endsWith('&')) {
      queryString = queryString.slice(0, -1);
    }
    return queryString;
  }

}
