import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SelfIntroComponent } from "./self-intro/self-intro.component";
import { AboutComponent } from "./about/about.component";
import { ProjectComponent } from "./project/project.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { SkillsComponent } from "./skills/skills.component";
import { WorkexperienceComponent } from "./workexperience/workexperience.component";

import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, NavbarComponent, SelfIntroComponent, AboutComponent, PortfolioComponent, ProjectComponent, ContactComponent, SkillsComponent, WorkexperienceComponent]
})
export class AppComponent {
  title = 'Portfolio';

}
