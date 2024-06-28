import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

 
 constructor(private elementRef: ElementRef){

 }
 ngAfterViewInit(): void {
  const aboutMeContainer = this.elementRef.nativeElement.querySelector('#about-me-container');

  window.addEventListener('scroll', () => {
    const rect = aboutMeContainer.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isInView) {
      aboutMeContainer.classList.add('fade-in');
    } else {
      aboutMeContainer.classList.remove('fade-in');
    }
  });
}

}