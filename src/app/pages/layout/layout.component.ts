import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Country } from '../../interfaces/country';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{

  countriesList: Country[] = [];

  countrySearchList:any;

  constructor( private dataSvc:DataService, private _snackBar: MatSnackBar, private router:Router){}

  ngOnInit(): void {
    this.displayAllCountries();
  }

  displayAllCountries(){
    this.dataSvc.getAllCountries().subscribe(countries => {
      this.countriesList = countries;
    })
  }

  searchCountryValue(term:string){
    if (!term.trim()) {
      // Evitar realizar una búsqueda si el término está vacío
      return;
    }
    this.dataSvc.searchCountry(term).subscribe({
      next:(countries:any) => {
        this.countriesList = countries;
        this.ifNotFound('Country not found');
      },
      error: (err:any) => {
        console.log('ERROR',err)
      }
    })


  }

  searchByRegion(term:string){
    this.dataSvc.searchByRegion(term).subscribe({
      next: (countries: any) => {
        // Si la búsqueda es exitosa, asigna los países a la lista
        this.countriesList = countries;
        this.ifNotFound('Region not found')
      },
      error: (err:any) => {
        console.log(err)
      },
    })
  }

  openSnackBar(message:string) {
    this._snackBar.open(message, 'Close',{
      duration:3000,
      verticalPosition:'top'
    })
  }

  ifNotFound(message:string){
    if(this.countriesList.length === 0){
      this.openSnackBar(message);
      this.displayAllCountries();
    }
  }
}


