import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordlistElementSetupComponent } from './wordlist-element-setup.component';

describe('WordlistElementSetupComponent', () => {
  let component: WordlistElementSetupComponent;
  let fixture: ComponentFixture<WordlistElementSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordlistElementSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordlistElementSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
