import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { remove } from '../store/app.state';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(
    private store: Store<{ app: Array<string> }>
  ) { }

  ngOnInit(): void {
  }

  @Input() item = '';

  removeItem(): void {
    this.store.dispatch(remove({payload: this.item}));
  }

}
