import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordActivitySeeComponent } from './word-activity-see.component';

describe('WordActivitySeeComponent', () => {
  let component: WordActivitySeeComponent;
  let fixture: ComponentFixture<WordActivitySeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordActivitySeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordActivitySeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
