import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.scss'
})
export class CountryInfoComponent implements OnInit {

  country:Country | null = null;

  constructor( private dataSvc:DataService){}

  ngOnInit(): void {
    this.dataSvc.searchCountry(this.dataSvc.selectedCountry).subscribe((data:any) => {
      this.country = data[0];
    })

  }

}
