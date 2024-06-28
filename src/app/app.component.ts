import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SelfIntroComponent } from "./self-intro/self-intro.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProjectComponent } from "./project/project.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, NavbarComponent, SelfIntroComponent, AboutComponent, PortfolioComponent, ProjectComponent]
})
export class AppComponent {
  title = 'Portfolio';

  // cursorX= 0;
  // cursorY = 0;
  // backgroundGradient: string = 'linear-gradient(to bottom right, #86E5F0, #3D92F3)';

  // onMouseMove(event: MouseEvent) {
  //   this.cursorX = event.clientX;
  //   this.cursorY = event.clientY;
  //   const x = event.clientX / window.innerWidth;
  //   const y = event.clientY / window.innerHeight;
  //   this.backgroundGradient = `linear-gradient(to bottom right, rgba(0, 128, 128, ${1 - y}), rgba(0, 0, 128, ${x}))`;
  // }
}
