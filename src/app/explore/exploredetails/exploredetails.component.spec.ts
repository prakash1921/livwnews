import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploredetailsComponent } from './exploredetails.component';

describe('ExploredetailsComponent', () => {
  let component: ExploredetailsComponent;
  let fixture: ComponentFixture<ExploredetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploredetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
