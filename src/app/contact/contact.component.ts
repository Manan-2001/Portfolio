import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit{

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
