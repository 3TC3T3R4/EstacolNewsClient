import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpublicComponent } from './postpublic.component';

describe('PostpublicComponent', () => {
  let component: PostpublicComponent;
  let fixture: ComponentFixture<PostpublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
