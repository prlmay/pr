import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcanomyComponent } from './ecanomy.component';

describe('EcanomyComponent', () => {
  let component: EcanomyComponent;
  let fixture: ComponentFixture<EcanomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcanomyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcanomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
