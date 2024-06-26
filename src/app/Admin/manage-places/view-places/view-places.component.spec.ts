import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacesComponent } from './view-places.component';

describe('ViewPlacesComponent', () => {
  let component: ViewPlacesComponent;
  let fixture: ComponentFixture<ViewPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
