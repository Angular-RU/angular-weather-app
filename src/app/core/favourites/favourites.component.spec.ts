import { FavouritesComponent } from './favourites.component';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
describe('TestComponent', () => {
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
  const allCities: CitiesModel[] = [
    {
      id: 1,
      title: 'Москва',
      weather: [
        {
          date: '2018-03-26',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-27',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-03-28',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-29',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-03-30',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-31',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-04-01',
          temp: 2,
          status: 'cloudy'
        }
      ],
      fav: false
    },
    {
      id: 2,
      title: 'Санкт-Петербург',
      weather: [
        {
          date: '2018-03-26',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-27',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-03-28',
          temp: 11,
          status: 'sun'
        },
        {
          date: '2018-03-29',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-03-30',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-31',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-04-01',
          temp: 2,
          status: 'cloudy'
        }
      ],
      fav: false
    }
  ];
  it('filter', () => {
    expect(component.test('q')).toEqual('1');
  });
});
