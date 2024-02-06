import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropPanelFilterComponent } from './drag-and-drop-panel-filter.component';

describe('DragAndDropPanelFilterComponent', () => {
  let component: DragAndDropPanelFilterComponent;
  let fixture: ComponentFixture<DragAndDropPanelFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropPanelFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragAndDropPanelFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
