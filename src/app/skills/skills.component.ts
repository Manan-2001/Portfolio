import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private el: ElementRef, private renderer: Renderer2){}
  ngAfterViewInit() {
    const contents = this.el.nativeElement.querySelectorAll('.content');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'float-bottom-to-top');
        }
      });
    }, {
      threshold: 0.1
    });

    contents.forEach((content: Element) => {
      observer.observe(content);
    });
  }

}
