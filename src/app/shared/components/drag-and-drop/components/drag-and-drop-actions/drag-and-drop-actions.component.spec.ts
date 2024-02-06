import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropActionsComponent } from './drag-and-drop-actions.component';

describe('DragAndDropActionsComponent', () => {
  let component: DragAndDropActionsComponent;
  let fixture: ComponentFixture<DragAndDropActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragAndDropActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
