import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: `
    mat-icon{
      margin:0 10px;
    }
    @media (max-width: 550px) {
      mat-form-field{
      width: 100%;
    }
}
  `
})
export class SearchComponent {

  @Input() label:string = '';

  placeholder:string = '';
  @Output() onSearchValue = new EventEmitter<string>();

  onSendValue(value:any){
    this.onSearchValue.emit(value);
  }

}
