import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ITodo } from '../list/list.component';
import { loadTodos, setTodos, successloadTodos } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class TodosEffectService {

  constructor(
    private store: Store<{ todos: Array<ITodo>}>,
    private actions$: Actions,
    private http: HttpClient
  ) { }

  carregaTodos = createEffect(() => this.actions$.pipe(
    ofType(loadTodos),
    withLatestFrom( this.store.select('todos')),
    switchMap(([_, todos]) => {
      if (todos.length === 0) {
        return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
          tap((todos) => this.store.dispatch(setTodos({payload: todos}))),
          map(() => successloadTodos())
         )
      }
      return of(successloadTodos())
    })))

}
