import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostHeaderComponent } from './blog-post-header.component';

describe('BlogPostHeaderComponent', () => {
  let component: BlogPostHeaderComponent;
  let fixture: ComponentFixture<BlogPostHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogPostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
