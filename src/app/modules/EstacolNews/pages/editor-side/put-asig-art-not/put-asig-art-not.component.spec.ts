import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAsigArtNotComponent } from './put-asig-art-not.component';

describe('PutAsigArtNotComponent', () => {
  let component: PutAsigArtNotComponent;
  let fixture: ComponentFixture<PutAsigArtNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutAsigArtNotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutAsigArtNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
