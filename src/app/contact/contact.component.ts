import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit{
  private scrollHandler!: (this: Window, ev: Event) => void;

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

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

