import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  Signal,
  signal,
} from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { DragAndDropItem } from '../../interfaces/drag-and-drop-core.interface';
import {
  DragAndDropPanelConfig,
  DragAndDropPanelSide,
  DragAndDropStatus,
} from '../../interfaces/drag-and-drop-config.interface';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/modules/material.module';
import { FilterInputComponent } from '@shared/components/filter-input/filter-input.component';
import { FeedbackComponent } from '@shared/components/feedback/feedback.component';
import { Feedback } from '@shared/components/feedback/utils/feedback.class';
import {
  FeedbackSize,
  FeedbackType,
} from '@shared/components/feedback/utils/feedback.enum';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { getEmptyList } from '../../utils/drag-and-drop.utils';

@Component({
  selector: 'app-drag-and-drop-panel',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    CdkDropList,
    CdkDrag,
    FilterInputComponent,
    FeedbackComponent,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './drag-and-drop-panel.component.html',
  styleUrl: './drag-and-drop-panel.component.scss',
})
export class DragAndDropPanelComponent implements OnChanges {
  @Input() public side!: DragAndDropPanelSide;
  @Input() public config!: DragAndDropPanelConfig;
  @Input() public items: DragAndDropItem<number>[] = [];
  @Input() public isLoading: Signal<boolean> = signal(true);

  @Output() public update = new EventEmitter<
    CdkDragDrop<DragAndDropItem<number>[]>
  >();
  // @Output() public filter = new EventEmitter<string>();

  public dragIndicatorIcon = 'drag_indicator';
  public filterDebounceTime = 350;

  public filteredItems: DragAndDropItem<number>[] = [];
  public emptyFeedback = new Feedback(
    FeedbackType.noRecords,
    FeedbackSize.Small
  );

  constructor() {}

  ngOnChanges({ items }: SimpleChanges): void {
    if (items?.currentValue) {
      this.filteredItems = items.currentValue;
    }
  }

  get statusClass(): string {
    return this.config.defaultStatus ?? DragAndDropStatus.Default;
  }

  get emptyList(): void[] {
    return getEmptyList(10);
  }

  public filterChangeHandler(term: string): void {
    this.filteredItems =
      term.length >= 3 ? this._getFilteredItemsByTerm(term) : this.items;
  }

  public dropHandler(event: CdkDragDrop<DragAndDropItem<number>[]>): void {
    this.update.emit(event);
  }

  public doubleClickHandler(event: Event): void {
    console.log(event);
  }

  private _getFilteredItemsByTerm(term: string): DragAndDropItem<number>[] {
    return this.items.filter(({ description }) =>
      description.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
  }
}
