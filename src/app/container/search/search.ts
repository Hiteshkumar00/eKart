import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchText: string = '';

  @Output() onSearchEvent = new EventEmitter<string>();

  onSearch(){
    this.onSearchEvent.emit(this.searchText.trim().toLowerCase());
  }
}
