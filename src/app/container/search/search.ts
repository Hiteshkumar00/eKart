import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchText: string = '';

  @Output() onSearchEvent = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl: ElementRef;

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.onSearch();
  }

  onSearch() {
    this.onSearchEvent.emit(this.searchText.trim().toLowerCase());
  }
}
