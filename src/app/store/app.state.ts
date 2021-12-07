import { createAction, createReducer, on, props } from "@ngrx/store"
import { ITodo } from "../list/list.component"

export interface IList {
  list: string[];
}
export interface ITodos {
  todos: ITodo[];
}

export const initialState: Array<string> =  ['RxJS', 'Ngrx', 'angular']
export const initial: ITodo[] = []

export const reset = createAction('[app] valor original lista')
export const remove = createAction('[app] remove item', props<{payload: string}>())
export const insert = createAction('[app] inserir item', props<{payload: string}>())
export const successInsert = createAction('[app] inserido com sucesso')

export const setTodos = createAction('[todos] Define todos', props<{payload: ITodo[]}>())
export const successloadTodos = createAction('[todos] todos carregados com sucesso')
export const loadTodos = createAction('[todos] Carrega todos')

export const appReducer = createReducer(
  initialState,
  on(reset, (state) => {
    state = initialState
    return state;
  }),
  on(insert, (state, {payload}) => {
    state = state.concat(payload)
    return state;
  }),
  on(remove, (state, {payload}) => {
    state = state.filter(value => value !== payload)
    return state;
  })
)

export const todosReducer = createReducer(
  initial,
  on(setTodos, (state, {payload}) => {
    state = payload
    return state;
  })
)

