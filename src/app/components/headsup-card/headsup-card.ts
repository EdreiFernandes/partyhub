import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headsup-card',
  imports: [],
  templateUrl: './headsup-card.html',
  styleUrl: './headsup-card.css'
})
export class HeadsupCard implements OnInit {
  @Input()
  name: String = "";
  @Input()
  tip: String = "";

  readonly landscape = window.matchMedia("(orientation: landscape)");
  isLandscaped: boolean = false;

  constructor(private ref: ChangeDetectorRef){}

  ngOnInit(): void {
    this.landscape.addEventListener("change", (_event: any) => this.hideCharacter());
  }

  hideCharacter() {
    this.isLandscaped = this.landscape.matches;
    this.ref.detectChanges();
  }
}
