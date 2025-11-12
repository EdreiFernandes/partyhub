import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSelector } from './word-selector';

describe('WordSelector', () => {
  let component: WordSelector;
  let fixture: ComponentFixture<WordSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
