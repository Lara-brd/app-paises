import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Country, CountryNameFlag } from '../../interfaces/country';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit{

  countries$: Observable<CountryNameFlag []> | null = null;//countries como un observable

  data:any = []

  constructor( private dataSvc:DataService, private router:Router ){}

  paises:Country[] = [];

  country:any;

  ngOnInit(): void {}

  getCountry(name:string):void{
    this.dataSvc.selectedCountry = name;
    this.router.navigate(['/info']);
  }

  searchCountry(country:string){
    this.dataSvc.searchCountry(country).subscribe(country => {
      this.country = country;
    })
  }



}
