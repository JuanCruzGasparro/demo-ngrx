import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropPanelComponent } from './drag-and-drop-panel.component';

describe('DragAndDropPanelComponent', () => {
  let component: DragAndDropPanelComponent;
  let fixture: ComponentFixture<DragAndDropPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragAndDropPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
