import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/modules/material.module';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-filter-input',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './filter-input.component.html',
  styleUrl: './filter-input.component.scss',
})
export class FilterInputComponent implements OnInit, OnChanges {
  @Input() public value = '';
  @Input() public debounce = 0;
  @Input() public label = 'Filter';
  @Input() public icon = 'search';

  @Output() public filter = new EventEmitter<string>();

  readonly searchTerm = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    this.searchTerm
      .pipe(distinctUntilChanged(), debounceTime(this.debounce))
      .subscribe((term: string) => this.filter.emit(term));
  }

  ngOnChanges({ value }: SimpleChanges): void {
    if (value?.currentValue) this.searchTerm.next(value.currentValue);
  }

  changeHandler(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.next(value);
    // this.changer.emit(value);
  }
}
