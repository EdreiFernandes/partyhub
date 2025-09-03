import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tictactoe',
  imports: [],
  templateUrl: './tictactoe.html',
  styleUrl: './tictactoe.css'
})
export class Tictactoe implements OnInit {
  @Input()
  url: SafeResourceUrl = "";

  url2: string = 'https://joga-da-velha.web.app';

  constructor(public sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
  }
}
