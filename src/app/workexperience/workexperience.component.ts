import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  standalone: true,
  imports: [],
  templateUrl: './workexperience.component.html',
  styleUrl: './workexperience.component.scss'
})
export class WorkexperienceComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2){}
  ngAfterViewInit() {
    const contents = this.el.nativeElement.querySelectorAll('.content');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'float-right-to-left');
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
