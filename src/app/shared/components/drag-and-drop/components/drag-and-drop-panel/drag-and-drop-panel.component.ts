import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DragAndDropItem } from '../../types/drag-and-drop.interface';
import { DragAndDropPanelConfig } from '../../types/drag-and-drop-config.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drag-and-drop-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, CdkDropList, CdkDrag],
  templateUrl: './drag-and-drop-panel.component.html',
  styleUrl: './drag-and-drop-panel.component.scss',
})
export class DragAndDropPanelComponent {
  @Input() public config!: DragAndDropPanelConfig;
  @Input() public items: DragAndDropItem<number>[] = [];

  @Output() public drop = new EventEmitter<
    CdkDragDrop<DragAndDropItem<number>[]>
  >();

  public onDrop(event: CdkDragDrop<DragAndDropItem<number>[]>): void {
    this.drop.emit(event);
    // moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    // console.log(event);
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
    // } else {
    //   transferArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
    // }
    // console.log('same container', event.container === event.previousContainer);
    // console.log(this.items[event.previousIndex]);
    // this.emitDrop.emit(event);
  }
}
