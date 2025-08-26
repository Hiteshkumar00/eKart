import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() filtersInfomation;
  @Output() onFilterProducts: EventEmitter<string> = new EventEmitter<string>();

  filterChanged(event: any) {
    this.onFilterProducts.emit(event.target.value);
  }
}
