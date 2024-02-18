import { Component, EventEmitter, Output, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '@shared/modules/material.module';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-drag-and-drop-panel-filter',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './drag-and-drop-panel-filter.component.html',
  styleUrl: './drag-and-drop-panel-filter.component.scss',
})
export class DragAndDropPanelFilterComponent {
  // @Input() public filter = new BehaviorSubject<string>('');
  // @Input() public filter = signal('');
  filter = input<string>();
  @Output() public change = new EventEmitter<string>();

  public filterFormControl = new FormControl('');

  public filterChangeHandler(term: string): void {
    // this.filter.set(term);
  }
}
