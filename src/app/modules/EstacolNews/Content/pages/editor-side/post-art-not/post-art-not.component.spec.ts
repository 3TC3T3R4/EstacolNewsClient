import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostArtNotComponent } from './post-art-not.component';

describe('PostArtNotComponent', () => {
  let component: PostArtNotComponent;
  let fixture: ComponentFixture<PostArtNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostArtNotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostArtNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
