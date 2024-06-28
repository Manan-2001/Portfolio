import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-self-intro',
  standalone: true,
  imports: [CommonModule,
    NgxTypedJsModule
  ],
  templateUrl: './self-intro.component.html',
  styleUrl: './self-intro.component.scss'
})
export class SelfIntroComponent {
  
  }
