import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordlistSetupComponent } from './wordlist-setup.component';

describe('WordlistSetupComponent', () => {
  let component: WordlistSetupComponent;
  let fixture: ComponentFixture<WordlistSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordlistSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordlistSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
