import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArtNotComponent } from './get-art-not.component';

describe('GetArtNotComponent', () => {
  let component: GetArtNotComponent;
  let fixture: ComponentFixture<GetArtNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetArtNotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetArtNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 test('should create', () => {
    expect(component).toBeTruthy();
  });
});
