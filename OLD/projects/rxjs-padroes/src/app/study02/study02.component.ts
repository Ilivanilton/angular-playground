import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-study02',
  templateUrl: './study02.component.html',
})
export class Study02Component implements OnInit {

  firsName = new FormControl('firsName')
  lastName = new FormControl('lastName')


  firsName$ = this.firsName.valueChanges.pipe(
    debounceTime(1000),
    startWith(this.firsName.value),
  )

  lastName$ = this.lastName.valueChanges.pipe(
    debounceTime(1000),
    startWith(this.lastName.value),
  )

  fullName$ = combineLatest([
    this.firsName$,
    this.lastName$,
  ]).pipe(
    map( ([firstName,lastName]) => `${firstName} ${lastName}` )
  )

  constructor() { }

  ngOnInit(): void {
  }

}
