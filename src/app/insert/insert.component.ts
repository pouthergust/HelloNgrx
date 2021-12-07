import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { insert } from '../store/app.state';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(
    private store: Store<{ app: Array<string> }>
  ) { }

  ngOnInit(): void {
  }

  inserir(value: string): void {
    this.store.dispatch(insert({payload: value}));
  }

}
