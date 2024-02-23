import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyMainComponent } from './privacy-policy-main.component';

describe('PrivacyPolicyMainComponent', () => {
  let component: PrivacyPolicyMainComponent;
  let fixture: ComponentFixture<PrivacyPolicyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyPolicyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
