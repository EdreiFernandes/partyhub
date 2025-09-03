import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsupDialog } from './headsup-dialog';

describe('HeadsupDialog', () => {
  let component: HeadsupDialog;
  let fixture: ComponentFixture<HeadsupDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadsupDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadsupDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
