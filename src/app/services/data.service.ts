import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Country, Flags } from '../interfaces/country';
import { catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = `${environment.baseUrl}`;
  selectedCountry:string = '';

  constructor( private http:HttpClient ) { }

  getAllCountries(){
    return this.http.get<Country[]>(`${this.baseUrl}/all`)
    // return this.http.get<Country[]>(`${this.baseUrl}/all`).pipe(
    //   map((countries:Country[]) => countries.map(country => ({
    //     name:country.name,
    //     flags:country.flags
    //   })))
    // )
  }


  getCountryInfo(){
    console.log('service', this.selectedCountry)
    if(!this.selectedCountry){
      return;
    }else{
      return this.http.get<Country []>(`https://restcountries.com/v3.1/name/${this.selectedCountry}`).pipe(
        map(country => country[0]),
      )
    }
  }


  searchCountry(countryName:string){
    return this.http.get(`https://restcountries.com/v3.1/name/${countryName}`).pipe(
      catchError(err => {
        return of([])
      })
    )
  }

  searchByRegion(regionName:string){
    return this.http.get(`https://restcountries.com/v3.1/region/${regionName}`).pipe(
      catchError(err => {
        return of([])
      })
    )
  }

}
