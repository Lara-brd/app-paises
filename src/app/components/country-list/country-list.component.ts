import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Country, CountryNameFlag } from '../../interfaces/country';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent{

  @Input() countries:Country [] = [];

  constructor(private router:Router, private dataSvc:DataService){}

  //Establece el país seleccionado en servicios y nos lleva a la página de información del país
  getCountry(country:string){
    this.dataSvc.selectedCountry = country;
    this.router.navigate(['/info'])
  }

}
