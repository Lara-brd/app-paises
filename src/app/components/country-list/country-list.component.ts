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
export class CountryListComponent implements OnInit{

  @Input() countries:Country [] = [];

  ngOnInit(): void {

  }


}
