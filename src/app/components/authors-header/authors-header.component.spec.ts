import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsHeaderComponent } from './authors-header.component';

describe('AuthorsHeaderComponent', () => {
  let component: AuthorsHeaderComponent;
  let fixture: ComponentFixture<AuthorsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
