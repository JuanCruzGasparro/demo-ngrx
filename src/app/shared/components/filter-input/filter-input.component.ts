import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Signal,
  SimpleChanges,
  effect,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/modules/material.module';
import { debouncer } from '@shared/utils/debouncer';

@Component({
  selector: 'app-filter-input',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './filter-input.component.html',
  styleUrl: './filter-input.component.scss',
})
export class FilterInputComponent implements OnChanges {
  @Input() public label = 'Filter';
  @Input() public value!: string;

  @Output() public changer = new EventEmitter<string>();

  readonly filter = signal<string>('');

  constructor() {
    effect(() => {
      console.log('filter', this.filter());
    });
  }

  ngOnChanges({ value }: SimpleChanges): void {
    // if (value?.currentValue) this.filter.set(value.currentValue);
  }

  changeHandler(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.filter.set(value);
    // debouncer(() => {
    //   this.changer.emit(value);
    // }, 350);
    // this.changer.emit(value);
  }
}
