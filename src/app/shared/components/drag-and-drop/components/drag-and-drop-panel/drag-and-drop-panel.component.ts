import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { DragAndDropItem } from '../../types/drag-and-drop.interface';
import {
  DragAndDropPanelConfig,
  DragAndDropPanelSide,
  DragAndDropStatus,
} from '../../types/drag-and-drop-config.interface';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/modules/material.module';
import { FilterInputComponent } from '@shared/components/filter-input/filter-input.component';

@Component({
  selector: 'app-drag-and-drop-panel',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    CdkDropList,
    CdkDrag,
    FilterInputComponent,
  ],
  templateUrl: './drag-and-drop-panel.component.html',
  styleUrl: './drag-and-drop-panel.component.scss',
})
export class DragAndDropPanelComponent {
  @Input() public side!: DragAndDropPanelSide;
  @Input() public config!: DragAndDropPanelConfig;
  @Input() public items: DragAndDropItem<number>[] = [];

  @Output() public drop = new EventEmitter<
    CdkDragDrop<DragAndDropItem<number>[]>
  >();

  public dragIndicatorIcon = 'drag_indicator';
  public filterDebounceTime = 350;

  public get statusClass(): string {
    return this.config.defaultStatus ?? DragAndDropStatus.Default;
  }

  public filterChange(term: string): void {
    console.log('filter', term);
  }

  public onDrop(event: CdkDragDrop<DragAndDropItem<number>[]>): void {
    this.drop.emit(event);
  }
}
