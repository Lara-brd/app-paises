import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{

  countriesList: Country[] = [];

  countrySearchList:any;

  constructor( private dataSvc:DataService){}

  ngOnInit(): void {
    this.displayAllCountries();
  }

  displayAllCountries(){
    this.dataSvc.getAllCountries().subscribe(countries => {
      this.countriesList = countries;
    })
  }

  searchCountryValue(term:string){
    this.dataSvc.searchCountry(term).subscribe((countries:any) => {
      this.countriesList = countries;
    })
  }

  searchByRegion(term:string){
    this.dataSvc.searchByRegion(term).subscribe((countries:any) => {
      this.countriesList = countries
    })
  }
}


