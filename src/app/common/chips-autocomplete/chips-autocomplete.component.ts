import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'chips-autocomplete',
  templateUrl: 'chips-autocomplete.component.html',
  styleUrls: ['chips-autocomplete.component.scss'],
})
export class ChipsAutocompleteComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itemsCtrl = new FormControl();
  filteredItems: Observable<string[]>;
  @Output() selectFilter: EventEmitter<any>;
  @Input() inputPlaceholder:string ="";
  items: string[] = [];
  @Input() allItems!: string[];
  @ViewChild('itemInput', {static: false})
  itemInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false})
  matAutocomplete!: MatAutocomplete;
  constructor() {
    this.selectFilter = new EventEmitter();
    this.filteredItems = this.itemsCtrl.valueChanges.pipe(
        startWith(null),
        map((item: string | null) => item ? this._filter(item) : this.allItems.slice()));
  }


  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our item
      if ((value || '').trim()) {
        this.items.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.itemsCtrl.setValue(null);
    }
  }

  remove(item: string): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
    this.selectFilter.emit(this.items);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.viewValue);
    this.itemInput.nativeElement.value = '';
    this.itemsCtrl.setValue(null);
    this.selectFilter.emit(this.items);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allItems.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }
}



