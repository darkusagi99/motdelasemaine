import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordActivityBuildComponent } from './word-activity-build.component';

describe('WordActivityBuildComponent', () => {
  let component: WordActivityBuildComponent;
  let fixture: ComponentFixture<WordActivityBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordActivityBuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordActivityBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
