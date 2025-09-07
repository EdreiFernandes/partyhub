import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tictactoe',
  imports: [],
  templateUrl: './tictactoe.html',
  styleUrl: './tictactoe.css'
})
export class Tictactoe implements OnInit {
  url: SafeResourceUrl = "";

  constructor(public sanitizer: DomSanitizer){}

  ngOnInit(): void {
    const externalUrl = 'https://joga-da-velha.web.app';
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(externalUrl);
  }
}
