import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SmoothScrollService } from '../smooth-scroll.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit{
  constructor(private elementRef: ElementRef,
    private smoothScrollService: SmoothScrollService
  ){}

  
  scrollTo(targetId: string): void {
    this.smoothScrollService.scrollToElement(targetId);
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
