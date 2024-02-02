import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSetupComponent } from './word-setup.component';

describe('WordSetupComponent', () => {
  let component: WordSetupComponent;
  let fixture: ComponentFixture<WordSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
