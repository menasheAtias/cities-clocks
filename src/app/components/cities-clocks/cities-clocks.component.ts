import { Component, OnInit } from '@angular/core';
import { CityClocksData } from 'src/app/models/cities-clocks-data';
import Data from '../../../assets/data/city-clocks.json';
import * as _ from 'lodash';
@Component({
  selector: 'app-cities-clocks',
  templateUrl: './cities-clocks.component.html',
  styleUrls: ['./cities-clocks.component.scss']
})
export class CitiesClocksComponent {
  citiesClocks: Array<CityClocksData>;
  filterCitiesClocks: Array<CityClocksData>;
  cities: Array<string>;
  constructor() {
    this.citiesClocks = Data["CityClocksData"] as Array<CityClocksData>;
    this.filterCitiesClocks = this.citiesClocks;
    this.cities = this.citiesClocks.map((item: CityClocksData) => { return item.cityName; })
  }
  filterCities(cities: any) {
    if (_.isEmpty(cities)) {
      this.filterCitiesClocks = this.citiesClocks;
    } else {
      this.filterCitiesClocks = this.citiesClocks.filter(c => cities.includes(c.cityName));
    }
  }
}
