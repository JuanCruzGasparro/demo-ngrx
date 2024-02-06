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
import { DragAndDropItem } from '../../drag-and-drop.interface';

@Component({
  selector: 'app-drag-and-drop-panel',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './drag-and-drop-panel.component.html',
  styleUrl: './drag-and-drop-panel.component.scss',
})
export class DragAndDropPanelComponent {
  @Input() public items: DragAndDropItem[] = [];
  @Input() public connectedTo!: DragAndDropPanelComponent;

  @Output() public emitDrop = new EventEmitter<any>();

  @ViewChild('panel') public panel!: CdkDropList<DragAndDropItem[]>;

  get panelConnection(): CdkDropList<DragAndDropItem[]> {
    return this.connectedTo.panel;
  }

  public onDrop(event: CdkDragDrop<DragAndDropItem[]>): void {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // console.log('same container', event.container === event.previousContainer);
    // console.log(this.items[event.previousIndex]);
    // this.emitDrop.emit(event);
  }
}
