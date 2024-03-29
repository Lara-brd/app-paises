import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LayoutComponent } from './layout.component';
import { DataService } from '../../services/data.service';
import { SearchComponent } from '../../components/search/search.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { MaterialModule } from '../../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let compiled:HTMLElement;
  let service:DataService;
  let httpMock:HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent, SearchComponent, CountryListComponent],
      imports:[HttpClientTestingModule, BrowserModule, MaterialModule, BrowserAnimationsModule],
      providers:[DataService]

    })
    .compileComponents();
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('html should contain app-search', ()=> {
    expect(compiled.innerHTML).toContain('app-search');
  });

  it('should send a GET request to "https://restcountries.com/v3.1/all" during ngOnInit', ()=> {
    const request = httpMock.expectOne('https://restcountries.com/v3.1/all')
    expect(request.request.method).toBe('GET');
  })



});
