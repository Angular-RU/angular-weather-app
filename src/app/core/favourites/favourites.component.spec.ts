import { FavouritesComponent } from './favourites.component';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('component', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('filter', () => {
    expect(component.test('q')).toEqual('1');
  });
});
