import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  @Input() label:string = '';

  placeholder:string = '';
  @Output() onSearchValue = new EventEmitter<string>();

  onSendValue(value:any){
    this.onSearchValue.emit(value);
  }

}
