import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToSpeechSetupComponent } from './text-to-speech-setup.component';

describe('TextToSpeechSetupComponent', () => {
  let component: TextToSpeechSetupComponent;
  let fixture: ComponentFixture<TextToSpeechSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextToSpeechSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextToSpeechSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
