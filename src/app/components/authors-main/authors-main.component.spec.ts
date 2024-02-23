import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsMainComponent } from './authors-main.component';

describe('AuthorsMainComponent', () => {
  let component: AuthorsMainComponent;
  let fixture: ComponentFixture<AuthorsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
