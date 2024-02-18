import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsIndexComponent } from './signals-index.component';

describe('SignalsIndexComponent', () => {
  let component: SignalsIndexComponent;
  let fixture: ComponentFixture<SignalsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
