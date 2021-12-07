import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IList, ITodos, loadTodos, reset, setTodos } from '../store/app.state';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos$ = this.store.select('todos')

  constructor(
    private store: Store<{ app: Array<string>, todos: ITodo[] }>,
    private http: HttpClient
    ) { }

  list$ = this.store.select('app')

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
    // this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
    // .subscribe({
    //   next: (res) => {
    //     this.store.dispatch(setTodos({payload: res}));
    //   }
    // })
  }

  reset(): void {
    this.store.dispatch(reset());
  }

}

// Generated by https://quicktype.io

export interface ITodo {
  userId:    number;
  id:        number;
  title:     string;
  completed: boolean;
}