import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent  implements AfterViewInit{
  private scrollHandler!: () => void;

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const aboutMeContainer = this.elementRef.nativeElement.querySelector('#about-me-container');

      if (aboutMeContainer) {
        this.scrollHandler = () => {
          const rect = aboutMeContainer.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

          if (isInView) {
            aboutMeContainer.classList.add('fade-in');
          } else {
            aboutMeContainer.classList.remove('fade-in');
          }
        };

        window.addEventListener('scroll', this.scrollHandler);
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}
