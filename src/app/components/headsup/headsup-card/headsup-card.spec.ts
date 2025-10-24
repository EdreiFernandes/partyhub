import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsupCard } from './headsup-card';

describe('HeadsupCard', () => {
  let component: HeadsupCard;
  let fixture: ComponentFixture<HeadsupCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadsupCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadsupCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
