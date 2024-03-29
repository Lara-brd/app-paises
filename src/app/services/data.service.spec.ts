import { TestBed } from '@angular/core/testing';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    service = TestBed.inject(DataService);
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no haya solicitudes pendientes después de cada prueba
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', ()=> {
    const testData:any = { name:'Test Data'};
    const testUrl = '/data';

    //Maque anm HTTP Get request
    httpClient.get<any>(testUrl)
      .subscribe(data =>
      // When observable resolves, result should match test data
          expect(data).toEqual(testData)
        );
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
  })

});
