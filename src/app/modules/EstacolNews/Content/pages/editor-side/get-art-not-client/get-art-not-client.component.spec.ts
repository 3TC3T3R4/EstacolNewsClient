import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArtNotClientComponent } from './get-art-not-client.component';

describe('GetArtNotClientComponent', () => {
  let component: GetArtNotClientComponent;
  let fixture: ComponentFixture<GetArtNotClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetArtNotClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetArtNotClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
