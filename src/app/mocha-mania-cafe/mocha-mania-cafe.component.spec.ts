import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MochaManiaCafeComponent } from './mocha-mania-cafe.component';

describe('MochaManiaCafeComponent', () => {
  let component: MochaManiaCafeComponent;
  let fixture: ComponentFixture<MochaManiaCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MochaManiaCafeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MochaManiaCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
