import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropIndexComponent } from './drag-and-drop-index.component';

describe('DragAndDropIndexComponent', () => {
  let component: DragAndDropIndexComponent;
  let fixture: ComponentFixture<DragAndDropIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragAndDropIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
