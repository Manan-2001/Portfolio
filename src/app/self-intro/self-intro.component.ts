import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-self-intro',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule],
  templateUrl: './self-intro.component.html',
  styleUrls: ['./self-intro.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelfIntroComponent implements OnInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Any code that needs to run on the browser
    }
  }
}
