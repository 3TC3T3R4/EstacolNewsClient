import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCollaboratorArtNotComponent } from './put-collaborator-art-not.component';

describe('PutCollaboratorArtNotComponent', () => {
  let component: PutCollaboratorArtNotComponent;
  let fixture: ComponentFixture<PutCollaboratorArtNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutCollaboratorArtNotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutCollaboratorArtNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
