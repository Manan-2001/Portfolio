import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGAVComponent } from './pgav.component';

describe('PGAVComponent', () => {
  let component: PGAVComponent;
  let fixture: ComponentFixture<PGAVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PGAVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PGAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
