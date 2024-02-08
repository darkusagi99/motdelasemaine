import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordActivityEndComponent } from './word-activity-end.component';

describe('WordActivityEndComponent', () => {
  let component: WordActivityEndComponent;
  let fixture: ComponentFixture<WordActivityEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordActivityEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordActivityEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
