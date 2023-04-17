import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutArtNotComponent } from './put-art-not.component';

describe('PutArtNotComponent', () => {
  let component: PutArtNotComponent;
  let fixture: ComponentFixture<PutArtNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutArtNotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutArtNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
