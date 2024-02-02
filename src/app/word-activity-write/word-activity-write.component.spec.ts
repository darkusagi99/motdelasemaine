import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordActivityWriteComponent } from './word-activity-write.component';

describe('WordActivityWriteComponent', () => {
  let component: WordActivityWriteComponent;
  let fixture: ComponentFixture<WordActivityWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordActivityWriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordActivityWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
