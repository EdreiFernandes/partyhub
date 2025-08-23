import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headsup } from './headsup';

describe('Headsup', () => {
  let component: Headsup;
  let fixture: ComponentFixture<Headsup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headsup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headsup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
